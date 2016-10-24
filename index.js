const pixie = require('pixie');

function ping(bot, config) {
  config = config[ping.name] || {};
  const format = config.format || 'Ping {{ping}}';
  return function run(message, args) {
    const now = Date.now();
    const res = pixie.render(format, {
      ping: (now - message.timestamp)
    });
    if (config.mention) message.reply(res)
    else message.channel.sendMessage(res);
  }
}

ping.command = 'ping';
ping.usage = 'ping';

module.exports = ping;
