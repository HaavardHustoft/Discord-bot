module.exports = {
    name: 'args-info',
    description: 'dislpay argsinfo',
    args: true,
    execute(message, args){
        if (args[0] == 'foo'){
            message.channel.send('bar');
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }
}