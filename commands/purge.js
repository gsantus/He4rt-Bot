const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const purgeHelp= new Discord.RichEmbed()

    .setAuthor('Purge Help', bot.user.displayAvatarURL)
    .setColor('#CA7D20')
    .setDescription('**Description:** Command to clear chat\n**Usage:** s!purge <number> \n**Example: **s!purge 100 ')
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} **Insufficient permissions.**`);
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.channel.send(purgeHelp);
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    
}

module.exports.help = {
  name: "purge"
}