# Tech Quiz with Cypress Testing 

## License Badge
![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
Tech Quiz is a lightweight web quiz app that allows users to take and retake a 10-question tech quiz. This project is a practical exercise in CI/CD automation using GitHub Actions, Cypress testing, and deployment to Render.
It demonstrates how to:
- Run component tests automatically on pull requests to the develop branch.
- Display test results as a summary in GitHub Actions.
- Deploy the application to Render when changes are pushed to the main branch.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To get started, clone the repository to your local machine using the following command:
git clone https://github.com/meglanghoffdesign/tech-quiz-cypress.git

Next, navigate into the project directory:
cd tech-quiz-cypress

Install dependencies:
npm install

Make sure to run the following commands prior to starting the application:
npm run build 
npm run seed

After that, you can run the project with:
npm run start

Because we are testing with Cypress, in a seperate terminal, you'll want to run the following command to open Cypress:
npx cypress run or npx cypress open

## Usage
Once the app is running, you can take the quiz and retake it as many times as you'd like.

Additionally, here is walkthrough video that demonstates all application behavior through Cypress: 
https://github.com/user-attachments/assets/a041c1ce-e96c-4d16-b947-591f11269624

## Contributing
At this time, contributions to this project are not accepted. Please feel free to fork the repository for personal use or modifications. Any pull requests or issues will not be reviewed or merged.

## Tests
This project includes Cypress testing:
- Component Test: Validates the quiz component's rendering and behavior.
- End-to-End Test: Simulates a full user flow of taking and retaking the quiz.

To run Cypress, run the project and run the following command in a seperate terminal:
npm run cypress

## CI/CD Workflow
This project follows a modern development and deployment flow:
- Pull Requests to develop trigger a GitHub Action that:
     - Runs Cypress component tests
     - Displays a test summary directly in the GitHub Actions UI
- Merges into main trigger a separate GitHub Action that:
     - Deploys the application to Render

This ensures all code is tested before being merged and deployed.

## Questions
If you have any questions, feel free to reach out to me at [meglanghoff@gmail.com](mailto:meglanghoff@gmail.com) or visit my GitHub profile at [https://github.com/meglanghoffdesign](https://github.com/meglanghoffdesign).
