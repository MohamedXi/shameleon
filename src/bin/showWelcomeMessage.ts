#!/usr/bin/env node

import figlet from 'figlet';
import { Logger } from '../lib/logger.js';

function showWelcomeMessage() {
  figlet('Hopla', (err: Error | null, data: string | undefined) => {
    if (err) {
      process.stdout.write('Error generating logo: ' + err + '\n');
      return;
    }

    if (data) {
      process.stdout.write(data + '\n');
    }

    process.stdout.write(`
      =========================================
         Welcome to Hopla CLI! 🎉
      =========================================

      ✅ Installation complete!
      👉 Run 'hopla --help' to get started.

    `);
    Logger.info('Welcome message displayed.');
  });
}

showWelcomeMessage();
