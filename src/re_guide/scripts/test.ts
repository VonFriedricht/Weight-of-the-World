import { Script } from "vnft-commandhandler"
import { Client } from "discord.js";

const test = new Script();

test.funct = (bot: Client) => {
    let vnft = bot.users.find(u=>u.id=="397063436049186818")
    vnft.send()
    console.log(vnft.dmChannel)
}

test.intervalTime = 60000

module.exports = test;
