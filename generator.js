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
    var str = fs.readFileSync('./user.json', 'utf8')
    webm = JSON.parse(str);
    const inputsum = util.random(1, 20000000);
    let one = util.random(0, webm.length - 1)
    let two = util.random(0, webm.length - 1)
    const output = webm[one].niceid
    const input = webm[two].niceid
    var strtrans = fs.readFileSync('./transaction.json', 'utf8')
    transaction = JSON.parse(strtrans);
    var d = new Date();
    transaction.push({
        output: output,
        input: input,
        summa: inputsum,
        idtransaction: transaction[transaction.length - 1] == null ? SHA256(output + input + inputsum) : SHA256(output + input + inputsum + transaction[transaction.length - 1].idtransaction),
        date: d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ":" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds() + ":" + d.getMilliseconds(),
        block: "",
        podt: [],
        mempul: [],
    });
    webm[one].transaction.push({
        output: output,
        input: input,
        summa: inputsum,
        idtransaction: transaction[transaction.length - 2] == null ? SHA256(output + input + inputsum) : SHA256(output + input + inputsum + transaction[transaction.length - 2].idtransaction),
        date: d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ":" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds() + ":" + d.getMilliseconds(),
        block: "",
        podt: [],
        mempul: [],
    });

    require('fs').writeFileSync('./transaction.json', JSON.stringify(transaction, null, '\t'));
    require('fs').writeFileSync('./user.json', JSON.stringify(webm, null, '\t'));
    console.log("Новая транзакция: " + transaction[transaction.length - 1] == null ? SHA256(output + input + inputsum) : SHA256(output + input + inputsum + transaction[transaction.length - 1].idtransaction) + " на сумму " + (inputsum / 100000) + " DC " + inputsum / 100000 * 64 + " $")

    return true;
}
setInterval(async() => {
    await saveUsers();

}, 8200);

run().catch(console.error);