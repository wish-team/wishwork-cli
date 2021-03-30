# Create Wish Work App

[![npm version](https://badge.fury.io/js/%40wishwork%2Fcreate-wish-work-app.svg)](https://badge.fury.io/js/%40wishwork%2Fcreate-wish-work-app) \
This CLI ships with the main **React** and **Storybook** configuration files you'll need to get up and running fast. There are standards for front-end development
that has been initialized by [**Wish Work**](https://wishwork.org) team for products which is developed by freelancers and developers. In this
README, we provide useful information so that developers understand the project structure. \
\
*If you have questions or need help, please ask in [GitHub Discussions](https://github.com/wish-team/wishwork-cli/discussions).*

## Motivation
As we grew as a team for development of many platforms, we struggle to define a compelling structure so that anyone could 
easily understand the products which has been developed by Wish Work team. For instance, one may use json-server for local development
and one may not, one may provide local environment in specific manner which contradicts with other, and it may cause overwhelming problems for understand the project, where is redux files, where is assets, 
to name but a few. As we believe in [**Convention over Configuration**](https://en.wikipedia.org/wiki/Convention_over_configuration) for better development, we provide our solution for establishing the first architecture of the project and developers just focus on the development problems that should be solved.

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
For more information about `json-server` library please click [**here**](https://github.com/typicode/json-server).
## Environment Variables

As mentioned above, there will be three envrionment variables: `.env.local` , `.env.development` and `.env.production`. \
\
Each of them has it's own usage. \
\
For local development you could use below command in the root of the project and also use `.env.local`:
```sh
make local
```
For staging development you could use below command in the root of the project and also use `.env.development`:
```sh
make dev
```
For production you could use below command in the root of the project and also use `.env.production`:
```sh
make production
```

## Storybook Preview
you could use below command for getting preview from the storybook.
```
make storybook
``` 
This storybook is based on [**Wish Work Design System**](https://github.com/wish-team/wish-work-dms).

## Auto Deploy on Github.io
There is a workflow for better testing of the application for deployment. For this purpose we provide 
a `main.yaml` file in `.github/workflow` folder.
you should create two instance in your repository settings: 
1. `ACTIONS_DEPLOY_ACCESS_TOKEN`
2. `REACT_APP_GITHUB_URL`

\
\
Make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch.
\
\
*For more information: [Setting up a CI/CD workflow on GitHub Actions for a React App](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)*
