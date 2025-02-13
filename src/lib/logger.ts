import chalk from 'chalk';

export class Logger {
  static success(message: string) {
    console.log(chalk.green(`✔ ${message}`));
  }

  static info(message: string) {
    console.log(chalk.blue(`ℹ ${message}`));
  }

  static warning(message: string) {
    console.log(chalk.yellow(`⚠ ${message}`));
  }

  static error(message: string) {
    console.error(chalk.red(`❌ ${message}`));
  }
}
