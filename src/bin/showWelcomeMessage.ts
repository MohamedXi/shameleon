import figlet from 'figlet';

function showWelcomeMessage() {
  figlet('Shameleon', (err: Error | null, data: string | undefined) => {
    if (err) {
      console.log('Error generating logo:', err);
      return;
    }

    if (data) {
      console.log(data);
    }

    console.log('\n🦎 Shameleon: Flexible Environment Switcher CLI\n');
    console.log('Use the --help flag to display available commands.\n');
  });
}

showWelcomeMessage();
