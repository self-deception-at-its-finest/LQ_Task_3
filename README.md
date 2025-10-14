
## Tech stack

-   [NodeJS](https://nodejs.org/)
-   [Cypress](https://docs.cypress.io/app/get-started/why-cypress)

## Install

-   Install [NodeJS](https://nodejs.org/)

-   Install [Git](https://git-scm.com/)

-   Clone this repo:

```bash
git clone https://github.com/self-deception-at-its-finest/LQ_Task_3
```

-   Go to the project folder

```bash
cd LQ_Task_3
```

-   Install dependencies:

```bash
npm i
```
## Steps to run

To run all tests use the following commands:

-   In headless mode (without showing the browser):

```bash
npx cypress run
```

-   In headed mode (with showing the browser):

```bash
npx cypress run --headed
```

## Reports


### CI

When running the `workflow.yml` workflow, the HTML report is deployed to the `test-reports` branch. The GitHub Pages feature is enabled in this branch, and you can view the deployed report by following this [link](https://self-deception-at-its-finest.github.io/LQ_Task_3/).

## GitHub Actions

In this Task, I use GitHub Actions to run all the tests and then deploy the report in the `test-reports` branch.