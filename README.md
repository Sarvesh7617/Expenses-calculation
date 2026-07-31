# Smart Expense Tracker API

## Overview

A REST API for managing personal expenses. The API allows users to:

- Add expenses
- View all expenses
- Filter expenses by category
- Calculate total expenses
- Delete expenses

---

## Tech Stack

- Node.js
- Express.js
- dotenv
- Jest
- Supertest

---

## Project Structure

```text
expense-tracker-web
│
├── src/
│   ├── app.js
│   ├── index.js
│   ├── controllers
│   │   └── expense.controller.js
│   ├── routes
│   │   └── expense.route.js
│   ├── data
│   │   └── expense.js
│   └── tests
│       └── expense.test.js
├── README.md
└── .env
└── AI_NOTES.md
```

---

## Installation

### 1. Clone the repository and install the dependencies:
   
```bash
git clone https://github.com/Sarvesh7617/Expenses-calculation.git
```

### 2. Navigate to project directory

```bash
cd expense-tracker-web
```

### 3. Install dependencies

```bash
npm install
```

### 4. Running the Server

Start the API server:

```bash
npm run dev
```

---

## Running Tests

Run the test suite:

```bash
npm test
```

---

# API Endpoints

## Add Expense

**POST** `/expenses`

### Request Body

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
}
```

### Response

```json
{
  "id": 1,
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "date": "2026-08-01"
}
```

---

## Get All Expenses

**GET** `/expenses`

Returns all stored expenses.

---

## Filter Expenses by Category

**GET** `/expenses/category/:category`

Returns expenses that match the specified category.

---

## Calculate Total Expenses

**GET** `/expenses/total`

### Example Response

```json
{
  "total": 250
}
```

---

## Calculate Total by Category

**GET** `/expenses/total/:category`

Returns the total expense amount for the specified category.

---

## Delete Expense

**DELETE** `/expenses/:id`

Deletes an expense using its ID.

### Example

```http
DELETE /expenses/1
```

---

# Testing

This project uses **Jest** and **Supertest** for API testing.

The test suite covers:

- Adding an expense
- Fetching all expenses
- Filtering expenses by category
- Calculating total expenses
- Deleting an expense
- Invalid input handling

Run the tests using:

```bash
npm test
```

---

# Data Storage

The application stores expense data **in memory**. No external database is required.

---

# Notes

This project was created as part of the **Software Engineering Apprenticeship 2026 Take-Home Assignment**.
