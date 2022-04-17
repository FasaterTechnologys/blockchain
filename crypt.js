const readline = require('readline-sync');
const fs = require('fs');
const crypto = require("crypto"),
    SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");
const cryptomd5 = require("crypto"),
    md5 = message => cryptomd5.createHash("md5").update(message).digest("hex");
let webm = require('./user.json');
let blockchain = require('./blockchain.json');
let chestn = require('./chestno.json');
const util = require('./include/util');
let prov = fs.readFileSync('./user.json', 'utf8')


async function run() {
    //const boolver = readline.question("У тебя есть кошелёк?: ");
    const idlast = SHA256(util.str_rand(50));
    const idshifr = md5(util.str_rand(20) + idlast);



    const creat = readline.question("nice: " + idshifr + " shifr: " + idlast);
    var str = fs.readFileSync('./user.json', 'utf8')
    webm = JSON.parse(str);


    webm.push({
        id: idlast,
        niceid: idshifr,
        transaction: [],
        onetransaction: "",
        lasttransaction: "",


    });
    require('fs').writeFileSync('./user.json', JSON.stringify(webm, null, '\t'));




    //mine(name1, name2)

}













async function saveUsers() {
    str = fs.readFileSync('./user.json', 'utf8')
    webm = JSON.parse(str);
    if (prov != str) {
        prov = str
        console.clear()
        console.log(webm)


    };

    return true;
}
setInterval(async() => {
    await saveUsers();

}, 200);

run().catch(console.error);