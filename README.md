# Workflow repo for the CA

# Overview

This project demonstrates the implementation of a workflow setup for a JavaScript project. It includes setting up development tools like ESLint, Prettier, and commit hooks, as well as testing tools like Vitest for unit tests and Playwright for end-to-end tests.

## Getting Started:

### Prerequsites:

- Node.js (>= v18.x.x)

- npm (>= v7.x.x)

### Installation

1. Clone the repository:
   git clone https://github.com/Inamarie84/workflow-repo-ca/tree/workflow

   cd workflow-repo-ca

2. Install dependencies:
   npm install

### Environment Variables

The project uses environment variable for configuration. .env file is in the root directory with the necessary variables.

### Required Environment Variables:

- TEST_USER_EMAIL

- TEST_USER_PASSWORD

## Testing

### Unit testing with Vitest

Vitest is configured for unit testing. The following test cases are implemented:

- isActivePath function:

1. Returns true when the current path matches the href exactly.
2. Returns true for root path ("/") when the path is "/" or "/index.html".
3. Returns true when the current path includes the href.
4. Returns false when paths don't match.

- getUserName function:

1. Returns the name from the user object in storage (first save a user object to storage).
2. Returns null when no user exists in storage.

To run unit tests:

- npm run test:unit

### End-to-End Testing with Playwright

Playwright is configured for end-to-end testing. The following test cases are implemented:

- login:

1. User can successfully log in with valid credentials from environment variables.
2. User sees an error message with invalid credentials.

- navigation:

1. Navigates to the home page.
2. Waits for the venue list to load.
3. Clicks the first venue.
4. Verifies that the venue details page loads with "Venue details" in the heading.

To run end-to-end tests:

- npm run test:e2e

## Scripts

The following npm scripts are available:

- start: Start the development server.
- test:unit: Run unit tests using Vitest.
- test:e2e: Run end-to-end tests using Playwright.
- lint: Run ESLint to lint the codebase.
- format: Run Prettier to format the codebase.

## Contributing:

For contributions, review and feedback:

1. Fork the repository.
2. Create a new branch.
3. Make changes in your branch.
4. Open a pull request from the branch into your fork’s default branch.
5. Request a review, incorporate feedback, and make any necessary suggestions.
