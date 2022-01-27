const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(`Guard Yardım|Yılmaz Dev`)
    .setColor("#00ff00")
    .addField(
      `**__anti-raid__**`,
      `⚙️ \`${prefix}anti-raid aç/kapat\` \n Discord sunucuza İzinsiz Bot Sokmaz.`,
      true
    )
    .addField(
      `**__anti-raid Bot İzni__**`,
      `⚙️ \`${prefix}bot-izni [bot id]\` \n Discord sunucuza Başka Dotun Girmesi İçin İzin Verir.`,
      true
    )
    .addField(
      `**__kanal-koruma__**`,
      `⚙️ \`${prefix}kanal-koruma aç/kapat\` \n Discord sunucuzda kanal-koruma açar/kapatır.`,
      true
    )
    .addField(
      `**__küfür-engel__**`,
      `⚙️ \`${prefix}Küfür-engel aç/kapat\` \n Discord sunucumuzda küfür-engel açar/kapatır.`,
      true
    )
    .addField(
        `**__mod-log__**`,
        `⚙️ \`${prefix}mod-log [kanal id]\` \n Discord sunucumuzda Mod-Log açar/kapatır.`,
        true
      )
      .addField(
        `**__reklam-engel__**`,
        `⚙️ \`${prefix}reklam-engel aç/kapat\` \n Discord sunucumuzda reklam-engel açar/kapatır.`,
        true
      )
      .addField(
        `**__rol-koruma__**`,
        `⚙️ \`${prefix}rol-koruma aç/kapat\` \n Discord sunucumuzda rol-koruma açar/kapatır.`,
        true
      )
      .addField(
        `**__yavaş-mod__**`,
        `⚙️ \`${prefix}yavaş mod [0/180]\` \n Discord sunucumuzda ki odanın yavaş-mod süresini ayarlar.`,
        true
      )
      .addField(
        `**__ping__**`,
        `⚙️ \`${prefix}ping\` \n Discord botunuzun gecikme süresini gösterir..`,
        true
      );
  msg.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["y","help"],
  permLevel: 0
};
exports.help = {
  name: "Yardım",
  description: "Guard Sistem Gösterir.",
  usage: "Yardım"
};
