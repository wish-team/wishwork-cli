# Wish Work React Application
This app ships with the main React and Storybook configuration files you'll need to get up and running fast. There are standards for front-end development
that has been initialized by **Wish Work** team for products which is developed by freelancers and developers. In this
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
    ├── .github                # Github workflow configuration
    ├── src                    # Source files and folders
    ├── test                   # Automated tests (alternatively `spec` or `tests`)
    ├── Makefile               # Makefile for running commands (e.g. make local)
    ├── index.js               # Main file for running the main app
    ├── Environment.js         # Javascript environment for using from process.env and return an object for better usage. 
    ├── .env.local             # 
    ├── .env.development       # 
    ├── .env.production        # 
    ├── LICENSE                # 
    └── README.md              # 

Inside a `src` folder would be some other folders as below:

    src
    ├── common                 # Assets and Mock-API for json-server
    ├── components             # Reusable components
    ├── stories                # Stories for getting preview
    ├── App.js                 # Main renderer


## Environment Variables

## Local Development

## Storybook Preview

## Contribute
