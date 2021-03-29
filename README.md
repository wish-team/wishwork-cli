# Wish Work React Application

[![npm version](https://badge.fury.io/js/%40wishwork%2Fcreate-wish-work-app.svg)](https://badge.fury.io/js/%40wishwork%2Fcreate-wish-work-app) \
This app ships with the main React and Storybook configuration files you'll need to get up and running fast. There are standards for front-end development
that has been initialized by [**Wish Work**](https://wishwork.org) team for products which is developed by freelancers and developers. In this
README, we provide useful information so that developers understand the project structure. \
\
*If you have questions or need help, please ask in [GitHub Discussions](https://github.com/wish-team/wishwork-cli/discussions).*

## Installation
First of all open the terminal and write below command:
```sh
mkdir my-wish-app && cd my-wish-app
```
and then:
```npm
npx @wishwork/create-wish-work-app --install
```
After that the project will be initialize. there will be some questions that you should answer.\
For example which template would you prefer `Javascript` or `Typescript`.


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
    ├── .env.local             # Local env (activate by `make local`)
    ├── .env.development       # Development env (activate by `make dev`)
    ├── .env.production        # Production env (activation by `make production`)
    ├── LICENSE                 
    └── README.md   

Inside a `src` folder would be some other folders as below:

    src
    ├── App.js                 # 
    ├── components             # Reusable components
    ├── stories                # Stories for getting preview
    ├── common                 
         ├── assets            #  assets like images, identity.css, etc
         ├── mock-api          #  consists of two json file one named mock.json (json returner) one named routes.json (route handler) 
         ├── utilities   


## Local Server

For running `json-server` for local development, use below command:
```sh
make json-server
```
For more information about json-server library please click [**here**](https://github.com/typicode/json-server).
## Environment Variables

As mentioned above, there will be three envrionment variables: `.env.local` , `.env.development` and `.env.production`. \
\
Each of them has it's own usage. \
\
For local development you could use below command in the root of the project and also use `.env.local`:
```makefile
make local
```
For staging development you could use below command in the root of the project and also use `.env.development`:
```makefile
make dev
```
For production you could use below command in the root of the project and also use `.env.production`:
```makefile
make production
```

## Storybook Preview
you could use below command for getting preview from the storybook.
```
make storybook
``` 
This storybook is based on [**Wish Work Design System**](https://github.com/wish-team/wish-work-dms).
