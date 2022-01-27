const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client ,message, args) =>{
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.reply(`Küfür Engel Başarılı Bir Şekilde Akif Edildi.`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.reply(`Küfür Engel Başarılı Bir Şekilde Kapatıldı Edildi`)
return
}
  message.reply(`Lütfen geçerli işlem girin. Örnek: ${prefix}küfür-engel aç/kapat`)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel'], 
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'küfürleri engeller',
 usage: 'küfürengel'
};