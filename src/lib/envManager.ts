import shell from 'shelljs';
import { EnvOptions } from '../types/options.js';
import { Logger } from './logger.js';

/**
 * Installs the Node.js version manager (n) if it is not already installed.
 *
 * This function checks if the `n` command is available on the system. If not, it attempts to install `n` globally using npm.
 * If the installation fails, it logs an error message and exits the process.
 *
 * @remarks
 * - This function uses the `shell` module to execute shell commands.
 * - It also uses a `Logger` to log information and error messages.
 * - The process will exit with code 1 if the installation of `n` fails.
 */
function installNodeVersionManager() {
  if (shell.exec('command -v n > /dev/null 2>&1').code !== 0) {
    Logger.info('Installing Node.js version manager (n)...');
    if (shell.exec('npm install -g n').code !== 0) {
      Logger.error('Failed to install "n". Please install it manually.');
      process.exit(1);
    }
  }
}

/**
 * Configures the Node.js environment to use a specified version.
 *
 * This function sets up the environment variables and switches to the specified
 * Node.js version using the `n` version manager. It updates the `N_PREFIX` and `PATH`
 * environment variables to ensure the correct Node.js version is used.
 *
 * @param {string} nodeVersion - The version of Node.js to switch to.
 *
 * @throws Will exit the process with code 1 if switching to the specified Node.js version fails.
 */
function configureNodeEnvironment(nodeVersion: string) {
  const nPrefix = `${process.env.HOME}/.n`;
  shell.env['N_PREFIX'] = nPrefix;
  shell.exec(`export N_PREFIX=${nPrefix}`);
  shell.env['PATH'] = `${nPrefix}/bin:${shell.env['PATH']}`;
  shell.exec(`export PATH=${nPrefix}/bin:$PATH`);

  if (shell.exec(`n ${nodeVersion}`).code !== 0) {
    Logger.error(`Failed to switch to Node.js v${nodeVersion}`);
    process.exit(1);
  }

  Logger.success(`Node.js switched to v${nodeVersion}`);
}

/**
 * Updates the global NPM version to the specified version.
 *
 * @param npmVersion - The version of NPM to update to.
 *
 * @remarks
 * This function uses the `shell.exec` method to run the `npm install -g npm@<version>` command.
 * If the command fails, it logs an error message and exits the process with a status code of 1.
 * If the command succeeds, it logs a success message.
 *
 * @example
 * ```typescript
 * updateNpm('7.20.0');
 * ```
 */
function updateNpm(npmVersion: string) {
  Logger.info(`Updating NPM to v${npmVersion}...`);
  if (shell.exec(`npm install -g npm@${npmVersion}`).code !== 0) {
    Logger.error(`Failed to update NPM to v${npmVersion}`);
    process.exit(1);
  }
  Logger.success(`NPM updated to v${npmVersion}`);
}

/**
 * Sets the NPM registry to the specified URL.
 *
 * This function updates the NPM registry configuration to the provided URL
 * and logs the process. If the operation fails, it logs an error message
 * and exits the process with a non-zero status code.
 *
 * @param {string} npmRegistry - The URL of the NPM registry to set.
 * @throws Will exit the process with a status code of 1 if setting the NPM registry fails.
 */
function setNpmRegistry(npmRegistry: string) {
  Logger.info(`Setting NPM registry to ${npmRegistry}...`);
  if (shell.exec(`npm set registry ${npmRegistry}`).code !== 0) {
    Logger.error(`Failed to set NPM registry`);
    process.exit(1);
  }
  Logger.success(`NPM registry set to ${npmRegistry}`);
}

/**
 * Logs into the specified Docker registry using the Docker CLI.
 *
 * @param {string} dockerRegistry - The URL or name of the Docker registry to log into.
 * @throws Will exit the process with code 1 if the login command fails.
 */
function loginDockerRegistry(dockerRegistry: string) {
  Logger.info(`Logging into Docker registry ${dockerRegistry}...`);
  if (shell.exec(`docker login ${dockerRegistry}`).code !== 0) {
    Logger.error(`Failed to log into Docker registry`);
    process.exit(1);
  }
  Logger.success(`Docker registry set to ${dockerRegistry}`);
}

/**
 * Configures the environment for a given client based on the provided options.
 *
 * @param client - The name of the client for which the environment is being configured.
 * @param options - An object containing various environment configuration options.
 * @param options.node - The version of Node.js to install and configure (optional).
 * @param options.npm - The version of npm to update to (optional).
 * @param options.npmRegistry - The npm registry URL to set (optional).
 * @param options.dockerRegistry - The Docker registry credentials to login with (optional).
 *
 * @returns void
 */
export function switchEnvironment(client: string, options: EnvOptions) {
  Logger.info(`Configuring environment for: ${client}`);

  if (options.node) {
    Logger.info(`Installing Node.js v${options.node}...`);
    installNodeVersionManager();
    configureNodeEnvironment(options.node);
  }

  if (options.npm) {
    updateNpm(options.npm);
  }

  if (options.npmRegistry) {
    setNpmRegistry(options.npmRegistry);
  }

  if (options.dockerRegistry) {
    loginDockerRegistry(options.dockerRegistry);
  }

  Logger.success(`[Shameleon] Environment ${client} configured successfully!`);
}
