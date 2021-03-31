import arg from 'arg'
import inquirer from 'inquirer'
import {createProject} from "./main";

function parseArgumentIntoOptions(rawArgs) {
    const args = arg(
        {
            '--git': Boolean,
            '--yes': Boolean,
            '--install': Boolean,
            '--sb': Boolean,
            '-g': '--git',
            '-y': '--yes',
            '-i': '--install'
        },
        {
            argv: rawArgs.slice(2)
        }
    );
    return {
        skipPrompts: args['--yes'] || false,
        git: args['--git'] || false,
        template: args._[0],
        storybook: args['--sb'] || false,
        runInstall: args['--install'] || false
    }
}

async function promptForMissingOptions(options) {
    const defaultTemplate = "JavaScript";
    if (options.skipPrompts) {
        return {
            ...options,
            template: options.template || defaultTemplate
        };
    }

    let questions = [];
    if (!options.template) {
        questions.push({
            type: 'list',
            name: 'template',
            message: 'Please choose which template wish work project to use',
            choices: ['JavaScript', 'TypeScript'],
            default: defaultTemplate
        })
    }
    if(!options.runInstall){
        questions.push({
            type: 'confirm',
            name: 'runInstall',
            message: 'Install npm dependencies for your project?',
            default: false
        })
    }
    if (!options.storybook) {
        questions.push({
            type: 'confirm',
            name: 'storybook',
            message: 'Initialize Wish Work Design System in your project?',
            default: false
        })
    }

    if (!options.git) {
        questions.push({
            type: 'confirm',
            name: 'git',
            message: 'Initialize a git repository?',
            default: false
        })
    }


    const answer = await inquirer.prompt(questions);
    return {
        ...options,
        template: options.template || answer.template,
        runInstall: options.runInstall || answer.runInstall,
        git: options.git || answer.git,
        storybook: options.storybook || answer.storybook
    }
}

export async function cli(args) {
    let options = parseArgumentIntoOptions(args);
    options = await promptForMissingOptions(options);
    await createProject(options)
}