# REST API Example

- Clone Repository
- Create a `.env` file with variables

```bash
OPTIMIZE_API_KEY=<YOUR_API_KEY>
DATABASE_URL=sqlserver://localhost:1499;database=dev;user=sa;password=c0mpLex-5eCreT-paword;encrypt=true;trustServerCertificate=true
```

- Install Dependencies: `npm install`
- Start dev mssql-server by running `docker compose -f "docker-compose.yml" up -d --build`
- Run: `npx prisma migrate dev --name init`
- Start Recording in the Optimize Dashboard
- Run: `npm run dev` to start the API Server
- Go to `http://localhost:3000/feed/`.
