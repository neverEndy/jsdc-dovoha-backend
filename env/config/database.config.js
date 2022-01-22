const dotenv = require('dotenv')
const dotEnvOptions = require('./dotenv-options')

dotenv.config(dotEnvOptions)

const result =  {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: Number.parseInt(process.env.TYPEORM_PORT, 10),
  entities: ["./build/entity/*.js"],
  migrations: ["src/migration/*.js"],
  cli: {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

module.exports = result