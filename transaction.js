const readline = require('readline-sync');
const fs = require('fs');
const crypto = require("crypto"),
    SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");
let webm = require('./user.json');
let blockchain = require('./blockchain.json');
let transaction = require('./transaction.json');
const util = require('./include/util');
let prov = fs.readFileSync('./user.json', 'utf8')


async function run() {
    //const boolver = readline.question("У тебя есть кошелёк?: ");
    const idlast = SHA256(util.str_rand(20));
    const idshifr = SHA256(util.str_rand(50));
    const output = readline.question("Send output: ")
    const input = readline.question("Send input: ");
    const inputsum = readline.question("Send summa: ");

    var str = fs.readFileSync('./user.json', 'utf8')
    var strtrans = fs.readFileSync('./transaction.json', 'utf8')
    webm = JSON.parse(str);
    transaction = JSON.parse(strtrans);
    let userpol = webm.find(x => x.niceid === output);
    if (userpol == null) return
    var d = new Date();
    console.log(transaction[transaction.length - 1] == null)
    transaction.push({
        output: output,
        input: input,
        summa: Number(inputsum),
        idtransaction: transaction[transaction.length - 1] == null ? SHA256(output + input + inputsum) : SHA256(output + input + inputsum + transaction[transaction.length - 1].idtransaction),
        date: d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ":" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds() + ":" + d.getMilliseconds(),
        block: "",
        podt: [],
        mempul: [],


    });

    require('fs').writeFileSync('./transaction.json', JSON.stringify(transaction, null, '\t'));




    //mine(name1, name2)

}










function mine(put, otpr) {
    let chestno = false;
    let i = 0;
    put = SHA256(put)
    otpr = SHA256(otpr)
    while (chestno == false) {

        let test = SHA256(put + otpr + i)

        console.log(test + " " + i)
        i++
        if (slojno(4, test) == 1) {
            chestno = true
        }

    }
    return
}

function slojno(nul, her) {
    let pen = 1;
    for (let i = 0; i < nul; i++) {
        if (her[i] != "0") pen = 0
    }
    return pen
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
//setInterval(async () => {
//	await saveUsers();

//}, 200);

run().catch(console.error);