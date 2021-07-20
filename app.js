
const DiscordRPC = require('discord-rpc'); 
const client = new DiscordRPC.Client({ transport: 'ipc' }); 
require('dotenv').config(); 

(async () => {
    client.on('ready', async () => { 
        await client.setActivity({ 
            buttons: [{ label: 'Join My RP Server', url: 'https://discord.gg/6AxAFkjQ' }],
            details: 'I Am A Cool Person',
            state: 'Join GVRPA Today',
            startTimestamp: new Date(),
            largeImageKey: 'rpc_icon',
            largeImageText: '101K Is A HeadAche'
        }).catch(err => console.log(err));

        console.log('Discord Rich Presence has been enabled.');
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); 
})();