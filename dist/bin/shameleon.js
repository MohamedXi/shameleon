import { Command } from 'commander';
import { switchEnvironment } from '../lib/envManager.js';
import { Logger } from '../lib/logger.js';
const program = new Command();
program
    .name('shameleon')
    .description('🦎 Shameleon: Flexible Environment Switcher CLI')
    .version('1.0.0')
    .helpOption('-h, --help', 'Display help information for Shameleon');
program
    .command('env <client>')
    .description('Switch to a specific environment dynamically')
    .option('--node <version>', 'Specify Node.js version')
    .option('--npm <version>', 'Specify NPM version')
    .option('--npm-registry <url>', 'Specify NPM registry')
    .option('--docker-registry <url>', 'Specify Docker registry')
    .action((client, options) => {
    Logger.info(`🔧 Configuring environment for: ${client}\n`);
    switchEnvironment(client, options);
});
program.parse(process.argv);
