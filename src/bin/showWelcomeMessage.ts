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
    console.log('\nWelcome to Shameleon CLI!');
    console.log(
      'Installation complete. You can now use the `shameleon` command.'
    );
  });
}

showWelcomeMessage();
