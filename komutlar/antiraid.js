const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
 if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.")
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("Anti-raid Komudu Zaten Başka Bir Zaman Açılmış");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Anti-raid Komudu Başarıyla Açıldı");
  }
 
  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        `Anti-raid Komudunu Açmak İçin ${prefix}anti-raid aç Yazmanız Yeterli`
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Anti-raid Komudu Başarıyla Kapatıldı");
  }
  if (!args[0])
    return message.reply(
      `Lütfen geçerli işlem girin. Örnek: ${prefix}anti-raid aç/kapat`
    );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['antiraid'],
  permLevel: 0
};
exports.help = {
  name: "anti-raid"
};