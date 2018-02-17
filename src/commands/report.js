
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
    title: 'CONFIDENTIAL!',
    text: 'I will reporst on a frequently base only if strictly confidentials.',
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

module.exports = { pattern: /report/ig, handler: handler }
