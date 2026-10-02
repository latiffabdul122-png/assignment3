# University Course Management System

A Node.js application demonstrating object-oriented programming concepts, ES Modules, asynchronous database simulation, and analytics calculation.

## Architecture & Features

- **Models (`models.js`)**: Encapsulates the `Student` class using `Object.defineProperty` to enforce read-only `id` fields.
- **Database Simulation (`database.js`)**: Simulates async data retrieval with callbacks and delay.
- **Analytics (`analytics.js`)**: Functional utilities to compute course grade averages and identify top performers.
- **Application Workflow (`main.js`)**: Coordinates asynchronous execution and prints detailed terminal reports.

## Execution

Run the main script using Node.js:

```bash
node main.js