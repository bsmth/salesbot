
'use strict'

const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'

if (ENV === 'development') dotenv.load()

const config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  PROXY_URI: process.env.PROXY_URI,
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  SALESBOT_COMMAND_TOKEN: process.env.SALESBOT_COMMAND_TOKEN,
  SLACK_TOKEN: process.env.SLACK_TOKEN,
  JEREMY_PASS: process.env.JEREMY_PASS,
  R_SECRET: process.env.R_SECRET,
  ICON_EMOJI: ':stars:'
}

module.exports = (key) => {
  if (!key) return config

  return config[key]
}
