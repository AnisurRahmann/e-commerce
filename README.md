## Live URL: https://e-commerce-chi-six.vercel.app/

# Run project

1. Clone repository from `git clone git@github.com:AnisurRahmann/e-commerce.git`
2. Run `npm install`
3. Create a `.env` file & add your postgres database url to `DATABASE_URL` variable.
4. Run `npx prisma db push` to create a new database instance
5. Run `npm run prisma:seed` to seed product data
6. Run `npm run dev` and project will be up and running on `localhost:3000`

# Testing

I have written few E2E tests with cypress. You can follow the steps to run the test cases.

1. `npx cypress install`
2. `npx cypress open`

Cypress gui will open the following. All the tests cases will be found `cypres/e2e/home.cy.ts`

# Technologies I have used

1. `Remix run` A modern and fantastic framework for ReactJs project.
2. I did not use any state management library as there is not much reason to use it. I have tried to keep props diffing withing 3 degree level components. Which is not that much mess for this project.
3. `prisma` A modern `ORM` which i love so much.
4. `postgres` for database.
5. `Cypress` for e2e testing.
6. `vercel` for deployment.

# Improvements

1. As per design i did not do any responsive works. That would a great thing to improve.
