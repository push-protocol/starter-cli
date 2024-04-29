#! /usr/bin/env node
import inquirer from "inquirer";
import {exec} from "child_process";
import chalk from "chalk";

const templates = [
  "push-video-starter-with-cra",
  "push-video-starter-with-nextjs",
  "push-dapp",
  "push-website",
];

const questions = [
  {
    type: "list",
    name: "template",
    message: "Choose a template:",
    choices: templates,
  },
];

inquirer.prompt(questions).then((answers) => {
  const selectedTemplate = answers.template;

  exec(
    `git clone https://github.com/Siddesh7/${selectedTemplate}.git`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(chalk.red(`Error: ${error.message}`));
        return;
      }
      console.log(
        chalk.green(`Cloned ${selectedTemplate} template successfully.`)
      );
      console.log("-------------------------------------------------");
      console.log(chalk.greenBright(`cd ${selectedTemplate} && npm install`));
      console.log(
        chalk.greenBright(
          `npm run ${
            selectedTemplate === "push-video-starter-with-nextjs"
              ? "dev"
              : "start"
          }`
        )
      );
    }
  );
});
