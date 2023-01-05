import clear from 'clear';
import figlet from 'figlet';
import chalk from 'chalk';
import { CreateStructure } from './lib/nextjs';

clear();

console.log(
  chalk.cyanBright.bold(
    figlet.textSync('Focus  Ignite', {
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true,
    })
  )
);

async function init() {
  const structure = new CreateStructure();
  structure.create();
}

init();
