# REST API Example

- Clone Repository
- Create a `.env` file with variables

```bash
OPTIMIZE_API_KEY=<YOUR_API_KEY>
DATABASE_URL=postgres://some-user:non-important-pg-password@localhost:5439/dev?schema=public
```

- Install Dependencies: `npm install`
- Start dev PostgreSQL-server by running `docker compose -f "docker-compose.yml" up -d --build`
- Run: `npx prisma migrate dev --name init`
- Start Recording in the Optimize Dashboard
- Run: `npm run dev` to start the API Server
- Go to `http://localhost:3000/feed/`.
