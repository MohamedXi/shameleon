import shell from 'shelljs';
import { Logger } from './logger.js';
export function switchEnvironment(client, options) {
    Logger.info(`Configuring environment for: ${client}`);
    // Installation et configuration de Node.js via `n`
    if (options.node) {
        Logger.info(`Installing Node.js v${options.node}...`);
        // Vérifie si `n` est installé, sinon l'installer
        if (shell.exec('command -v n > /dev/null 2>&1').code !== 0) {
            Logger.info('Installing Node.js version manager (n)...');
            if (shell.exec('npm install -g n').code !== 0) {
                Logger.error('Failed to install "n". Please install it manually.');
                process.exit(1);
            }
        }
        // Spécifier un répertoire d'installation local pour éviter `sudo`
        const nPrefix = `${process.env.HOME}/.n`;
        shell.env['N_PREFIX'] = nPrefix;
        shell.exec(`export N_PREFIX=${nPrefix}`);
        // Ajouter le répertoire bin de N_PREFIX au PATH
        shell.env['PATH'] = `${nPrefix}/bin:${shell.env['PATH']}`;
        shell.exec(`export PATH=${nPrefix}/bin:$PATH`);
        // Installer la version demandée
        if (shell.exec(`n ${options.node}`).code !== 0) {
            Logger.error(`Failed to switch to Node.js v${options.node}`);
            process.exit(1);
        }
        Logger.success(`Node.js switched to v${options.node}`);
    }
    // Mise à jour de NPM
    if (options.npm) {
        Logger.info(`Updating NPM to v${options.npm}...`);
        if (shell.exec(`npm install -g npm@${options.npm}`).code !== 0) {
            Logger.error(`Failed to update NPM to v${options.npm}`);
            process.exit(1);
        }
        Logger.success(`NPM updated to v${options.npm}`);
    }
    // Configuration du registre NPM
    if (options.npmRegistry) {
        Logger.info(`Setting NPM registry to ${options.npmRegistry}...`);
        if (shell.exec(`npm set registry ${options.npmRegistry}`).code !== 0) {
            Logger.error(`Failed to set NPM registry`);
            process.exit(1);
        }
        Logger.success(`NPM registry set to ${options.npmRegistry}`);
    }
    // Connexion au registre Docker
    if (options.dockerRegistry) {
        Logger.info(`Logging into Docker registry ${options.dockerRegistry}...`);
        if (shell.exec(`docker login ${options.dockerRegistry}`).code !== 0) {
            Logger.error(`Failed to log into Docker registry`);
            process.exit(1);
        }
        Logger.success(`Docker registry set to ${options.dockerRegistry}`);
    }
    Logger.success(`[Shameleon] Environment ${client} configured successfully!`);
}
