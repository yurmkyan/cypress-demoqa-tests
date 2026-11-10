# Cypress DemoQA tests

This project contains Cypress end-to-end tests for the DemoQA Text Box page:

`https://demo-qa-app.azurewebsites.net/text-box`

## Requirements

- Node.js (LTS recommended)
- npm

## Install dependencies

```bash
npm install
```

## Run the DemoQA tests in a browser

```bash
npm run test:open
```

## Run the DemoQA tests headlessly

```bash
npm run test:demoqa
```

## Run all Cypress specs

```bash
npm test
```

The tests cover page/form visibility, successful form submission and browser-level email validation.
