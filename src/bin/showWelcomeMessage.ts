#!/usr/bin/env node

import figlet from 'figlet';
import { Logger } from '../lib/logger.js';

function showWelcomeMessage() {
  process.stdout.write('Generating Shameleon logo...\n');
  figlet('Shameleon', (err: Error | null, data: string | undefined) => {
    if (err) {
      process.stdout.write('Error generating logo: ' + err + '\n');
      return;
    }

    if (data) {
      process.stdout.write(data + '\n');
    }

    process.stdout.write(`
      =========================================
         🦎 Welcome to Shameleon CLI! 🎉
      =========================================

      ✅ Installation complete!
      👉 Run 'shameleon --help' to get started.

    `);
    Logger.info('Welcome message displayed.');
  });
}

showWelcomeMessage();
