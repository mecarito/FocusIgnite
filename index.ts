import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import touch from 'touch';
import emoji from 'node-emoji';
import ora from 'ora';
import { askSomeQuestions } from './lib/nextjs';

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
//   spinner.color = 'yellow';
//   spinner.text = 'Loading rainbows';
// }, 1000);

// clear();

console.log(
  chalk.cyanBright.bold(
    figlet.textSync('Focus  Ignite', {
      horizontalLayout: 'controlled smushing',
      verticalLayout: 'controlled smushing',
      width: 80,
      whitespaceBreak: true,
    })
  )
);

async function run() {
  const answers = await askSomeQuestions();
  console.log(answers);
  const modulefolders = [
    'components',
    'guards',
    'models',
    'pages',
    'services',
    'specs',
    'styles',
    'states',
  ];
  const modulefile = '.module.ts';
  const newpath = './src/app/modules/';

  // fs.mkdirSync(modulepath, {
  //     recursive: true,
  // });

  // modulefolders.forEach((folder) => {
  //     const submodulefolders = modulepath.concat("/", folder);
  //     fs.mkdirSync(submodulefolders, {
  //         recursive: true,
  //     });
  // });

  // const filepath = modulepath.concat("/", credentials.modulename, ".module.ts");
  // touch(filepath);

  console.log(
    chalk.greenBright(
      'Successfully created folders and files for this module',
      emoji.get('sunglasses')
    )
  );
  console.log(
    chalk.greenBright(
      'speed is of the essence',
      emoji.get('smiley'),
      emoji.get('rocket')
    )
  );
}

run();
