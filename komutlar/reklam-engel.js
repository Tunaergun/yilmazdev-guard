const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.reklam`, true)
    message.reply(`Reklam Engel Başarılı Bir Şekilde Akif Edildi.`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.reklam`)
message.reply(`Reklam Engel Başarılı Bir Şekilde Kapatıldı.`)
return
}
  message.reply(`Lütfen geçerli işlem girin. Örnek: ${prefix}reklam-engel aç/kapat`)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['reklamengel'], 
 permLevel: 0
};

exports.help = {
 name: 'reklam-engel',
 description: 'reklamı engeller.',
 usage: 'reklamengel'
};