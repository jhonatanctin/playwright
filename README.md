Instructions for Executing a QA Project Using Playwright and Visual Studio Code

Prerequisites:
Ensure that the logged-in user has Administrator privileges on the laptop.
Install Visual Studio Code (You can download it from the App Center).
Install Node.js and npm. Refer to the following site for guidance: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

1. Create a folder, for example, 'playwright,' in the file explorer.

2. Open Visual Studio Code (VSC) and navigate to the previously created folder.

3. Open the terminal in VSC and execute the following commands:

npm init playwright@latest

Choose the following options to get started:

Choose JavaScript (default is TypeScript).
Name your Tests folder (default is 'tests' or 'e2e' if you already have a tests folder in your project).
Add a GitHub Actions workflow to easily run tests on CI.
Install Playwright browsers.

4. Once the previous process is complete, you will see the following files in the file explorer in VSC:

    playwright.config.ts
    package.json
    package-lock.json
    tests/
        example.spec.ts
    tests-examples/
        demo-todo-app.spec.ts

5. In the terminal, execute the following command:

npx playwright test

*If all the previous steps were executed successfully, you should see the following message:


Running 6 tests using 5 workers
  6 passed (8.9s)

6. To open the latest HTML report, run:

npx playwright show-report

*Click + Alt on the URL to view the report.

From your GitHub repository, go to tests/example.spec.js.
Copy the content of the file and replace the content in your local repository with the same path.

Execute step 5 once more and review the test report.
