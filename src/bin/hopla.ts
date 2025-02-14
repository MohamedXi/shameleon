#!/usr/bin/env node

import { Command } from 'commander';
import {
  checkCurrentEnvironment,
  switchEnvironment,
} from '../lib/envManager.js';
import { Logger } from '../lib/logger.js';
import { EnvOptions } from '../types/options.js';

const program = new Command();

program
  .name('Hopla')
  .description('Hopla is a flexible environment switcher CLI')
  .version('0.1.1')
  .helpOption('-h, --help', 'Display help information for Hopla');

program
  .command('env <client>')
  .description('Switch to a specific environment dynamically')
  .option('--java <version>', 'Specify Java version')
  .option('--node <version>', 'Specify Node.js version')
  .option('--npm <version>', 'Specify NPM version')
  .option('--npm-registry <url>', 'Specify NPM registry')
  .option('--docker-registry <url>', 'Specify Docker registry')
  .action((client: string, options: EnvOptions) => {
    Logger.info(`🔧 Configuring environment for: ${client}\n`);
    switchEnvironment(client, options);
  });

program
  .command('current')
  .description('Check the current environment configuration')
  .option('--node', 'Show current Node.js version')
  .option('--npm', 'Show current NPM version')
  .option('--npm-registry', 'Show current NPM registry')
  .option('--docker-registry', 'Show current Docker registry')
  .action((options) => {
    Logger.info(`🔍 Checking current environment configuration:\n`);
    checkCurrentEnvironment(options);
  });

program.parse(process.argv);
