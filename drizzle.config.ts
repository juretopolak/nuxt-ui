import type { Config } from 'drizzle-kit'

export default {
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  driver: 'better-sqlite',
  dbCredentials: {
    url: './server/db/db.sqlite'
  }
} satisfies Config



// import { type Config } from 'drizzle-kit';
// import path from 'path';

// const dbPath = path.resolve(__dirname, 'src', 'myDatabase.db');

// export default {
// 	out: './migrations',
// 	schema: './src/schema.ts',
// 	breakpoints: true,
// 	driver: "libsql",
// 	dbCredentials: {
// 		url: Bun.env.DB_URL || `file:${dbPath}`
// 	}
// } satisfies Config;