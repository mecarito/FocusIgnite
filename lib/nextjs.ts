import { nextJsFolders, questions } from './constants';
import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
import emoji from 'node-emoji';
import ora from 'ora';

interface QuestionsResponse {
  directoryResponse: boolean;
}

export class CreateStructure {
  constructor() {}

  private askSomeQuestions(): Promise<QuestionsResponse> {
    return inquirer.prompt(questions);
  }

  async create() {
    const { directoryResponse } = await this.askSomeQuestions();
    if (directoryResponse) {
      const directory = fs.mkdirSync('./src', {
        recursive: true,
      });
      if (directory) {
        const spinner = ora('Creating directories').start();

        setTimeout(() => {
          spinner.color = 'yellow';
          spinner.text = 'Creating directories';

          nextJsFolders.forEach((folder: string) => {
            fs.mkdirSync(`${directory}/${folder}`, {
              recursive: true,
            });
          });

          spinner.stop();

          console.log(
            chalk.greenBright(
              'Successfully created directories',
              emoji.get('sunglasses')
            )
          );

          console.log(
            chalk.greenBright(
              'speed is of the essence',
              emoji.get('robot_face'),
              emoji.get('rocket')
            )
          );
        }, 1500);
      }
      if (directory == undefined) {
        console.log(
          chalk.greenBright(
            'Directory exists',
            emoji.get('robot_face'),
            emoji.get('rocket')
          )
        );
      }
    } else {
      console.log(chalk.greenBright(emoji.get('cry'), 'Directory not created'));
    }
  }
}
