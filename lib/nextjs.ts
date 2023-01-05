import { nextJsFolders } from './constants';
import inquirer from 'inquirer';
import fs from 'fs';

function askSomeQuestions() {
  const questions = [
    {
      name: 'folders',
      type: 'confirm',
      message: `Creating src directory in the root directory with: ${nextJsFolders} directories in it`,
    },
  ];
  return inquirer.prompt(questions);
}

function createFolders() {
  fs.mkdirSync("./", {
      recursive: true,
  });
  modulefolders.forEach((folder) => {
      const submodulefolders = modulepath.concat("/", folder);
      fs.mkdirSync(submodulefolders, {
          recursive: true,
      });
  });
  const filepath = modulepath.concat("/", credentials.modulename, ".module.ts");
  touch(filepath);
}
export { askSomeQuestions };
