#!/usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';
import { switchEnvironment } from '../lib/envManager.js';
import { Logger } from '../lib/logger.js';
import { EnvOptions } from '../types/options.js';

const program = new Command();

program
  .name('shameleon')
  .description('🦎 Shameleon: Flexible Environment Switcher CLI')
  .version('1.0.0')
  .helpOption('-h, --help', 'Display help information for Shameleon');

function showWelcomeMessage() {
  figlet('Shameleon', (err, data) => {
    if (err) {
      console.log('Error generating logo:', err);
      return;
    }
    console.log(data);
    console.log('\nWelcome to Shameleon CLI!');
    console.log(
      'Installation complete. You can now use the `shameleon` command.'
    );
    console.log('Run `shameleon --help` to see available commands.\n');
  });
}

showWelcomeMessage();

program
  .command('env <client>')
  .description('Switch to a specific environment dynamically')
  .option('--node <version>', 'Specify Node.js version')
  .option('--npm <version>', 'Specify NPM version')
  .option('--npm-registry <url>', 'Specify NPM registry')
  .option('--docker-registry <url>', 'Specify Docker registry')
  .action((client: string, options: EnvOptions) => {
    Logger.info(`🔧 Configuring environment for: ${client}\n`);
    switchEnvironment(client, options);
  });

program.parse(process.argv);
