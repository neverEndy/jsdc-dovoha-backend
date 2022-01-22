const path = require('path')

const env = process.env.NODE_ENV || 'development'
const envPath = path.join(process.cwd(), `env/${env}.env`)
console.log(`Loading environment from ${envPath}`)
const dotEnvOptions = {
  path: envPath
};

module.exports = dotEnvOptions
