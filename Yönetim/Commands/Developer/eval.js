const { Discord, createMessageComponentCollector, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require("discord.js");

module.exports = {
    name: "eval",
    about: "(ktria)",
    aliases: ["evals"],
    run: async (client, message, args) => {
      if(message.author.id != "652956408270159872") return;
      if (!args[0]) return message.channel.send(`Kod belirtilmedi`);
      let code = args.join(' ');
      function clean(text) {
        if (typeof text !== 'string') text = require('util').inspect(text, { depth: 0 })
        text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
        return text;
      };
      try {
        var evaled = clean(await eval(code));
        if (evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace(client.token, "Yasaklı komut");
        message.channel.send(`\`\`\`${evaled.replace(client.token, "Yasaklı komut")}\`\`\``, { code: "js", split: true });
      } catch (err) { message.channel.send(err, { code: "js", split: true }) };
    }

    }

