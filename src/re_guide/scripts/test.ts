import { Script } from "vnft-commandhandler"
import { Client } from "discord.js";

const test = new Script();

test.funct = (bot: Client) => {
    let vnft = bot.users.find(u=>u.id=="397063436049186818")
    if( !vnft.dmChannel ){
        vnft.send(" ").catch(e=>console.log(`reeee: ${e}`))
    }
    else{
        console.log(vnft.dmChannel)
    }
}

test.intervalTime = 60000

module.exports = test;