module.exports = {
    name: 'server',
    description: 'displays serverinfo',
    cooldown: 5,
    execute(message, args){
        message.channel.send(`This server's name is ${message.guild.name}\n Total members: ${message.guild.memberCount}\n Date created: ${message.guild.createdAt}`);
    }
};