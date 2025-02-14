import chalk from 'chalk';
export class Logger {
    static success(message) {
        console.log(chalk.green(`✔ ${message}`));
    }
    static info(message) {
        console.log(chalk.blue(`ℹ ${message}`));
    }
    static warning(message) {
        console.log(chalk.yellow(`⚠ ${message}`));
    }
    static error(message) {
        console.error(chalk.red(`✖ ${message}`));
    }
}
