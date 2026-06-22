# Net Split

Net Split is a modern expense-sharing web application that helps groups of friends split shared expenses fairly and calculate settlements instantly.

Whether it's a trip, team lunch, hostel expenses, weekend ride, or any group activity, Net Split makes it easy to track who paid, who owes money, and the final settlement transactions.


### Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1cbc8a1f-0239-45f8-bc94-831b7d128d29" />

_home-page-screenshot_

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e1138716-86cc-49de-bb26-103683607d96" />

_detailes-page-screenshot_

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f973d078-b42f-4e48-a342-5cfd1060861d" />

_settlement-section-screenshot_

## Features

### Expense Books

Create and manage multiple expense books.

Examples:

- Goa Trip
- Team Lunch
- Weekend Ride
- Hostel Food

Each expense book contains:

- Name
- Description
- Created Date
- Friends
- Expenses

### Friend Management

Add, edit, and remove friends from an expense book.

Each friend contains:

- ID
- Name

### Expense Management

Add, edit, and delete expenses.

Each expense contains:

- Title
- Amount
- Paid By
- Participants
- Created Date

Example:

Title: Dinner

Amount: ₹1200

Paid By: Nasim

Participants:

- Nasim
- Rahul
- Akhil

### Smart Settlement Calculation

Net Split automatically calculates:

- Total amount paid by each person
- Individual share of expenses
- Final balance
- Recommended settlement transactions

Example:

Nasim paid ₹1200

Rahul paid ₹800

Akhil paid ₹400

Total Expense = ₹2400

Each person's share = ₹800

Final Settlement:

Akhil ➜ Nasim ₹400

### Settlement Dashboard

View:

- Amount each friend paid
- Amount each friend owes
- Amount each friend should receive
- Suggested settlement transactions

### WhatsApp Summary Generator

Generate a WhatsApp-ready expense summary instantly.

Example:

📒 Goa Trip

💰 Total Expense: ₹2400

👥 Participants:
• Nasim
• Rahul
• Akhil

📊 Settlement

✅ Nasim paid: ₹1200
✅ Rahul paid: ₹800
✅ Akhil paid: ₹400

💵 Final Settlement

Akhil ➜ Nasim ₹400

Generated using Net Split

<img width="787" height="861" alt="image" src="https://github.com/user-attachments/assets/7b38e13b-d43e-42ed-a70c-227ffc892c58" />

_message-screenshot_

### Local Storage Persistence

All data is stored locally in the browser using Zustand Persist Middleware.

Data remains available even after:

- Page refresh
- Browser restart

No backend required.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- LocalStorage

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd net-split
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Learning Outcomes

This project demonstrates:

- React Component Architecture
- TypeScript Fundamentals
- Zustand State Management
- CRUD Operations
- Data Persistence
- Expense Splitting Logic
- Settlement Algorithms
- Responsive UI Design
- Reusable Components
- Utility-Based Calculations

## Author

Muhammed Nasim K

Built as a portfolio project to demonstrate frontend development skills using React, TypeScript, Zustand, and Tailwind CSS.
