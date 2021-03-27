# Wish Work React Application
This app ships with the main React and Storybook configuration files you'll need to get up and running fast. There are standards for front-end development
that has been initialized by [**Wish Work**](https://wishwork.org) team for products which is developed by freelancers and developers. In this
README, we provide useful information so that developers understand the project structure.

## Installation
First of all open the terminal and write below command:
```
mkdir my-wish-app && cd my-wish-app
```
and then:
```npm
npx @wishwork/create-wish-work-app --install
```
After that the project will be initialize. there will be some questions that you should answer.\
for example which template would you prefer `Javascript` or `Typescript`.

## Structure
The project structure will be as below: 

    .
    ├── .storybook             # Storybook configuration
    ├── src                    # Documentation files (alternatively `doc`)
    ├── test                   # Automated tests (alternatively `spec` or `tests`)
    ├── tools                  # Tools and utilities
    ├── LICENSE
    └── README.md

Inside a `src` folder would be some other folders as below:

    src
    ├── App.js                 # Assets and Mock-API for json-server
    ├── components             # Reusable components
    ├── stories                # Stories for getting preview
    ├── common             # Main renderer
           ├── assets
           ├── mock-api
           ├── utilities   


## Environment Variables

## Local Development

## Storybook Preview
you could use below command for getting preview from the storybook.
```
make storybook
``` 
This storybook is based on [**Wish Work Des