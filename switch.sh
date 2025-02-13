#!/bin/bash

# Enable strict mode
set -euo pipefail

# Load NVM if available
if [ -f "$HOME/.nvm/nvm.sh" ]; then
  source "$HOME/.nvm/nvm.sh"
elif [ -f "/usr/local/opt/nvm/nvm.sh" ]; then
  source "/usr/local/opt/nvm/nvm.sh"
else
  echo -e "\n\033[31m✖ ERROR: NVM is not installed or accessible.\033[0m\n"
  exit 1
fi

# Define colors and styles
BOLD="\033[1m"
RESET="\033[0m"

GREEN="\033[32m"
YELLOW="\033[33m"
BLUE="\033[34m"
RED="\033[31m"
CYAN="\033[36m"

# Define icons
CHECKMARK="${GREEN}✔${RESET}"
ERROR="${RED}✖${RESET}"
INFO="${CYAN}ℹ${RESET}"

# Error handler
error_handler() {
  local exit_code=$?
  local line_number=$1
  echo -e "\n${ERROR} ${BOLD}ERROR:${RESET} Line ${BOLD}$line_number${RESET} (Code: ${BOLD}$exit_code${RESET})\n"
  exit $exit_code
}

# Trap errors
trap 'error_handler $LINENO' ERR

# Check for required arguments
if [ $# -lt 1 ]; then
  echo -e "\n${ERROR} ${BOLD}Usage:${RESET} $0 <client> [--node <version>] [--npm <version>]\n"
  exit 1
fi

client="$1"
config_file="$(dirname "$0")/$client.sh"
node_version=""
npm_version=""

# Parse options
shift
while [[ $# -gt 0 ]]; do
  case "$1" in
    --node) node_version="$2"; shift 2 ;;
    --npm) npm_version="$2"; shift 2 ;;
    *) echo -e "\n[Shameleon] ${ERROR} Unknown option: $1\n"; exit 1 ;;
  esac
done

echo -e "\n[Shameleon] ${BOLD}${BLUE}🔧 Configuring environment: $client${RESET}\n"

# Load default configuration
source "$(dirname "$0")/default.sh" || { echo -e "\n[Shameleon] ${ERROR} Failed to load default.sh\n"; exit 1; }
echo -e "[Shameleon] ${CHECKMARK} Default configuration loaded.\n"

# Load client-specific configuration
if [ -f "$config_file" ]; then
  source "$config_file" || { echo -e "\n[Shameleon] ${ERROR} Failed to load $client.sh\n"; exit 1; }
  echo -e "[Shameleon] ${CHECKMARK} Client configuration loaded.\n"
else
  echo -e "\n[Shameleon] ${ERROR} Configuration file not found: $config_file\n"
  exit 1
fi

# Change Node.js version if requested
if [ -n "$node_version" ]; then
  echo -e "[Shameleon] ${INFO} Installing and switching to Node.js v$node_version...\n"
  nvm install "$node_version" && nvm use "$node_version" || { echo -e "\n[Shameleon] ${ERROR} Failed to configure Node.js\n"; exit 1; }
  nvm alias default "$node_version"
  echo -e "[Shameleon] ${CHECKMARK} Node.js configured to v$node_version.\n"
fi

# Change NPM version if requested
if [ -n "$npm_version" ]; then
  echo -e "[Shameleon] ${INFO} Updating NPM to v$npm_version...\n"
  npm install -g "npm@$npm_version" || { echo -e "\n${ERROR} Failed to update NPM\n"; exit 1; }
  echo -e "[Shameleon] ${CHECKMARK} NPM updated to v$npm_version.\n"
fi

# Configure NPM registry if defined
if [ -n "$NPM_REGISTRY" ]; then
  echo -e "[Shameleon] ${INFO} Configuring NPM registry $NPM_REGISTRY...\n"
  npm config set registry "$NPM_REGISTRY" || { echo -e "\n${ERROR} Failed to configure NPM registry\n"; exit 1; }
  echo -e "[Shameleon] ${CHECKMARK} NPM registry configured successfully.\n"
fi

# Configure Docker registry if defined
if [ -n "$DOCKER_REGISTRY" ]; then
  echo -e "[Shameleon] ${INFO} Logging into Docker registry $DOCKER_REGISTRY...\n"
  docker login "$DOCKER_REGISTRY" || { echo -e "\n${ERROR} Failed to log into Docker registry\n"; exit 1; }
  echo -e "[Shameleon] ${CHECKMARK} Docker registry configured successfully.\n"
fi

echo -e "[Shameleon] ${CHECKMARK} ${BOLD}${GREEN}Environment $client configured successfully!${RESET}\n"
