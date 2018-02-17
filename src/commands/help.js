
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'salesbot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Salesbot is 💯 lit',
    color: '#2FA44F',
    text: '`/Salesbot report` sends out the latest and greatest sales news!',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
