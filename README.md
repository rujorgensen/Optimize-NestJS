# REST API Example

- Clone Repository
- Create a `.env` file with variables

```bash
DATABASE_URL
OPTIMIZE_API_KEY
```

- Install Dependencies: `npm install`
- Run: `npx prisma migrate dev --name init`
- Start Recording in the Optimize Dashboard
- Run: `npm run dev` to start the API Server
- Go to `http://localhost:3000/feed/`. This should invoke a few database queries. We would expect this to show up in Optimize Recording but nothing shows up.
