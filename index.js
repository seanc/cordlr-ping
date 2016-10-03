const pixie = require('pixie');

function ping(bot, config) {
  return function run(message, args) {
    const now = Date.now();
    const res = pixie.render(config.ping.format, {
      ping: (now - message.timestamp)
    });
    if (config.ping.mention) message.reply(res)
    else message.channel.sendMessage(res);
  }
}

ping.command = 'ping';
ping.usage = 'ping';

module.exports = ping;
