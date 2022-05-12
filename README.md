# Shopify Backend Intern Challenge

## Functional Requirements

- [x] Create inventory items.
- [x] Edit inventory items.
- [x] Delete inventory items.
- [x] View a list of inventory items.
- [x] Ability to create “shipments” and assign inventory to the shipment, and adjust inventory appropriately.

## Getting Started

### Local Setup

```bash
# Install application dependencies
npm install

# Create SQLite database
npx prisma migrate dev

# Seed database
npx prisma db seed

# Build application
npm run build

# Launch application
npm run start
```

Open [localhost:3000](http://localhost:3000) to view the application.

### View on Replit

I have deployed the application using Replit. You can view the live application
at: [https://shopify-backend-challenge.nikolasnorth.repl.co](https://shopify-backend-challenge.nikolasnorth.repl.co)

The repl can be found
at: [https://replit.com/@NikolasNorth/shopify-backend-challenge](https://replit.com/@NikolasNorth/shopify-backend-challenge)

API routes can be accessed under `/api`.
