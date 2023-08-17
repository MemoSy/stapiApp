   // strapi-api/config/database.js
   module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'dpg-cjeiomunk9qs73c2at20-a.frankfurt-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'store_ht0o'),
        user: env('DATABASE_USERNAME', 'mahmut'),
        password: env('DATABASE_PASSWORD', 'M8sZfpnrFTYaPeD2JnkYNAbUGukucNsm'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', true),
        },
      },
      debug: false,
    },
  });