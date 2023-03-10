const dotenv = require('dotenv').config();

module.exports = {
  "development": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgresql"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgresql",
    "logging": false,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}
