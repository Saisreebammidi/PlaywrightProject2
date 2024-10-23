
# Playwright Project

This project is an automated testing solution using [https://automationexercise.com/]: Playwright is a Node.js library that allows for testing across Chromium, Firefox, and WebKit, supporting end-to-end and integration testing of web applications.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Test Scripts](#test-scripts)
- [Generating Reports](#generating-reports)
- [Folder Structure](#folder-structure)


## Introduction

This project uses Playwright to run automated tests for web applications. It includes sample test cases, configuration files, and instructions for running the tests locally and in CI/CD pipelines.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)
- [Allure CLI](https://docs.qameta.io/allure/) (optional, for generating test reports)

## Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/PlaywrightProject.git
   cd PlaywrightProject
2. **Install Dependencies**
    npm install
3. **Install Playwright Browsers**
    npx playwright install
**Running Tests**
  You can run tests using various commands specified in the package.json file:
  Running All Tests
  npx playwright test
**Running Tests in a Specific Browser (Chromium, Firefox, WebKit)**
  npx playwright test --project=chromium
  npx playwright test --project=firefox
  npx playwright test --project=webkit
**Running a Specific Test File**
  npx playwright test tests/example.spec.ts
**Running in Headed Mode (with Browser UI)**
  npx playwright test --headed
**Test Scripts**
  You can add custom scripts in the package.json to simplify running tests. For example:
    "scripts": {
    "test": "npx playwright test",
    "Regression": "npx playwright test --project=chromium",
    "smoke": "npx playwright test --grep @smoke"
      }
**Generating Reports
Playwright HTML Report**
  After running the tests, you can view the report using:
  npx playwright show-report
**Allure Reports (Optional)**
  Ensure the allure-results directory is generated after tests run.
  Generate and open the Allure report:
   allure generate allure-results --clean -o allure-report
   allure open allure-report
**Folder Structure**
 ![image](https://github.com/user-attachments/assets/0133cd05-8625-44fd-96cf-06b7918dd93c)

   ****Contributing:**
      1.Fork the repository.
      2.Create a new branch (git checkout -b feature-branch).
      3.Make your changes.
      4.Commit your changes (git commit -m 'Add new feature').
      5.Push to the branch (git push origin feature-branch).
      6.Open a Pull Request.**
     ![image](https://github.com/user-attachments/assets/b416c772-e851-45bb-b098-8e203a1dbef8)
   ![image](https://github.com/user-attachments/assets/75f91a3b-5632-403d-a31e-93ad43fd9973)
   ![image](https://github.com/user-attachments/assets/974de3f9-75db-47fd-8413-24153ac3ddad)
   ![image](https://github.com/user-attachments/assets/1d79e5c9-7136-4bfa-bce1-e47668a5f968)
   ![image](https://github.com/user-attachments/assets/11346438-3bd9-453a-8d58-644f9fe417c7)
   ![image](https://github.com/user-attachments/assets/7fcbb853-31b8-4854-9724-fdb1f0525d83)
   ![image](https://github.com/user-attachments/assets/0d6bf6c2-0dc9-477b-8f34-ce8189274e34)

   ![image](https://github.com/user-attachments/assets/fbaa8791-35e8-4892-a4fa-f9cc1efa6c5a)
   ![image](https://github.com/user-attachments/assets/7f2d90c0-b573-401c-85bc-ca7647ecf218)
   ![image](https://github.com/user-attachments/assets/ffc6e3e2-7249-4c9a-ad32-d775720c142d)
   ![image](https://github.com/user-attachments/assets/618d31f6-42ea-4489-b5d3-df260708214c)
   ![image](https://github.com/user-attachments/assets/4a2b5ce9-1444-49c7-9341-850a6c814f2a)
   ![image](https://github.com/user-attachments/assets/dfa4eba7-6a23-4f87-baaa-5dbe797bc17d)
   ![image](https://github.com/user-attachments/assets/4b2f58f2-8f9b-473d-b651-a05697a079f4)
   ![image](https://github.com/user-attachments/assets/be250f45-31c8-4292-acb2-d5f88c16b372)
   ![image](https://github.com/user-attachments/assets/b67bf89d-4eec-49eb-94a3-ce71b02b7388)
   ![image](https://github.com/user-attachments/assets/3f0012d6-bdc6-4793-bb21-9739671953ad)
   ![image](https://github.com/user-attachments/assets/953592e2-7f81-4d8a-bd54-2fd9aefc0f12)
   ![image](https://github.com/user-attachments/assets/ea8802e9-4ad5-4b17-9d77-b897628b5022)




























