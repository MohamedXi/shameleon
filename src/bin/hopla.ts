#!/usr/bin/env node

import { Command } from 'commander';
import * as path from 'path';
import { switchEnvironment } from '../lib/envManager.js';
import { Logger } from '../lib/logger.js';
import { EnvOptions } from '../types/options.js';

const packageJson = require(path.resolve(__dirname, '../package.json'));

const version = packageJson.version;

const program = new Command();

program
  .name('Hopla')
  .description('Hopla is a flexible environment switcher CLI')
  .version(version)
  .helpOption('-h, --help', 'Display help information for Hopla');

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
