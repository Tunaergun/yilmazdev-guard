const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
   let p = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

   if (!args[0]) {
  const sa = new Discord.MessageEmbed()
  .setTitle('Hatalı Kullanım!')
  .setDescription(`Bunumu Arıyorsun? ${p}otorol aç @rol #kanal`)
  return message.channel.send(sa)
}
  if (args [0] == 'kapat') {
    
   db.delete(`otorol_${message.guild.id}`,)
    db.delete(`ototakipkanal_${message.guild.id}`,)
    const nedenn = new Discord.MessageEmbed()
    .setTitle('Başarılı!')
    .setDescription('Otorolü Kapattım!')
    return message.channel.send(nedenn)
  }
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['otorol'],
    permLevel: 0
}

exports.help = {
    name: 'otorol'
}
