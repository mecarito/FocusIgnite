import clear from 'clear';
import figlet from 'figlet';
import chalk from 'chalk';
import { CreateStructure } from './lib/nextjs';


// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
//   spinner.color = 'yellow';
//   spinner.text = 'Loading rainbows';
// }, 1000);

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

async function run() {
  const structure = new CreateStructure();
  structure.create();


    

  // modulefolders.forEach((folder) => {
  //     const submodulefolders = modulepath.concat("/", folder);
  //     fs.mkdirSync(submodulefolders, {
  //         recursive: true,
  //     });
  // });

  // const filepath = modulepath.concat("/", credentials.modulename, ".module.ts");
  // touch(filepath);
}

run();
