require('dotenv').config()

module.exports = {
  development: {
    username: 'postgres',
    password: null,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    redisUrl: 'redis://127.0.0.1',
    auth_secret_key: 'zHdguH0VPpPTJzCftRZelObX',
    admin_auth_secret_key: 'JkYXRhIjoiMSIsImlhdCI6MTU1M'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    redisUrl: 'redis://admin:MmssOmFXxc8OWz3zXhNA3rgYqBJdANOKHEHXmLIHCl8=@mzaalo.redis.cache.windows.net:6379/0',
    auth_secret_key: 'zHdguH0VPpPTJzCftRZelObX',
    admin_auth_secret_key: 'JkYXRhIjoiMSIsImlhdCI6MTU1M',
    balance: {
      url: 'https://staging.mzaalo.com/api/v1/rewards/',
      ocpApimSubscriptionKey: ''
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    redisUrl: 'redis://admin:2WmdlyTdgx033KPMZOdPwGD8F9D1APAGjoeTRuKX5KU=@mzaalo-prod.redis.cache.windows.net:6379/0',
    auth_secret_key: 'zHdguH0VPpPTJzCftRZelObX',
    admin_auth_secret_key: 'JkYXRhIjoiMSIsImlhdCI6MTU1M',
    balance: {
      url: 'http://reward-engine:56140/api/v1/rewards/',
      ocpApimSubscriptionKey: '1d0caac2702049b89a305929fdf4cbae'
    }
  }
}
