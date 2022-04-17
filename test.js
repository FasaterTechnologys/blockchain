const readline = require('readline-sync');
const fs = require('fs');
const crypto = require("crypto"),
    SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");
let webm = require('./user.json');
let blockchain = require('./blockchain.json');
let transaction = require('./transaction.json');
const util = require('./include/util');
let prov = fs.readFileSync('./user.json', 'utf8')

let chsas = 0

let curs = 5.8
let random = 0
let speed = 100000000
let obnov = 0
async function run() {

    while (true) {
        chsas += 1 / util.random(-600 * speed, 1000 * speed)
        if (chsas === Infinity) {
            chsas = 0.1
        }

        //chsas -= ((String(curs).length - 1) * util.random(1, 10)) / 10
        if (util.random(1, 10000) == 500) {
            chsas += 1 / util.random(-1000 * speed, 1000 * speed)
        }
        if (util.random(1, 10000) == 800) {
            chsas += 1 / util.random(-1000 * speed, 1000 * speed)
        }
        obnov += 1
        if (obnov == 12000000) {

            console.clear()
            console.log("\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "                                                      " + String(curs.toFixed(4)) + "$")

            obnov = 0

            require('fs').writeFileSync('./curs.json', String(curs.toFixed(4)));
        }
        curs += chsas
        chsas = 0
            //console.log(i + "")

    }

}
run().catch(console.error);