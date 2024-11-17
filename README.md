# Fullstack solution to a tech test

## Instructions to run locally:

Run the backend
```
cd Backend/
yarn install
yarn start
```
Run the frontend
```
cd Frontend/
npm ci
npm run dev
```
The frontend randomly selects a customer ID on refresh - this lets you test to see the conditional rendering based on certain data coming back from the frontend - namely the freeGift conditional render, but also that the UI adjusts as expected when certain strings are long and go onto a new line on smaller screen widths.
