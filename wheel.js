const fs = require('fs');
const colors = require('colors');
const mongoose = require('mongoose');
const deferred = require('deferred');

const vk = require('./include/vk');
const util = require('./include/util');
const { Qiwi } = require('node-qiwi-promise-api');
const qiwi = new Qiwi("d654802a736f137a536b571dfab43c75");


let _cmpen = [];



//const cmds = fs.readdirSync(`${__dirname}/cmds/`).filter((name) => /\.js$/i.test(name)).map((name) => require(`${__dirname}/cmds/${name}`));
/* —---------------------— [ Бот ] —---------------------— */

let defferred = []


setInterval(() => util.random(-200000000, 200000000) + util.random(-200000000, 200000000), 10000)

vk.setHook(['new_message', 'edit_message'], async(context) => {
    const userId = Number(context.senderId);
    if (context.senderId < 1 || context.isOutbox || context.isGroup) {
        return;
    }

    defferred.forEach(async(data) => {
        if (data.user_id == context.senderId) {
            data.def.resolve(context);
            return defferred.splice(defferred.indexOf(data), 1);
        }
    });

    context.question = async(text) => {
        await context.send(text);
        let def = deferred();
        defferred.push({ user_id: context.senderId, def: def });
        return await def.promise((data) => { return data.text; });
    }
    let str = context.text;
    let dedhuy = str.split(" ");
    if (dedhuy[0].toLowerCase() == "курс") {
        var strcurs = fs.readFileSync('./curs.json', 'utf8')
        return context.send("Текущий курс " + strcurs + "$")
    }


    if (dedhuy[0].toLowerCase() == "блок") {
        let str2 = fs.readFileSync('./blockchainno.json', 'utf8')
        let blockchain = JSON.parse(str2);
        let strblock = `Последний созданный блок: `
        let summa = 0
        let podt = 0
        let nopodt = 0
        for (let i = 0; i < blockchain[blockchain.length - 1].hash.list.length; i++) {
            summa += blockchain[blockchain.length - 1].hash.list[i].summa
            if (blockchain[blockchain.length - 1].hash.list[i].podt.length != 0) podt += 1
            else nopodt += 1
        }
        strblock = strblock + `\n\nХэш: ${blockchain[blockchain.length-1].hash.hashlast} `
        strblock = strblock + `\n\nДата: ${blockchain[blockchain.length-1].hash.data} `
        strblock = strblock + `\n\nБлок был создан: ${blockchain[blockchain.length-1].hash.sozd} `
        strblock = strblock + `\n\nСложность блока: ${util.number_format(blockchain[blockchain.length-1].sloj)} `
        strblock = strblock + `\n\nКоличество транзакций: ${blockchain[blockchain.length-1].hash.list.length} `
        strblock = strblock + `\n\nОбщая сумма транзакций: ${summa/ 100000} DC`
        strblock = strblock + `\n\nПодтверждено транзакций: ${podt} `
        strblock = strblock + `\n\nНе подтверждено транзакций: ${nopodt} `
        strblock = strblock + `\n\nКомиссия всех транзакций: 0.0 `
        strblock = strblock + `\n\nВес транзакций: ${JSON.stringify(blockchain[blockchain.length - 1].hash.list).length*2} `
        strblock = strblock + `\n\nВес блока: ${JSON.stringify(blockchain[blockchain.length - 1].hash).length*2} `

        return context.send(strblock)
    }




    if (dedhuy[0].toLowerCase() == "подкрутка") {
        context.send("https://vk.com/@fastercoin-chto-takoe-chestnaya-igra-i-kak-ee-proverit")
    }










})



async function run() {


    await vk.connect(function(err) {
        if (err) { return console.log(`[ RCORE ] Ошибка подключения! (VK)`, err); }
        console.log(`[ RCORE ] Успешно подключен! (VK)`)
    });



    console.log(`[ RCORE ] Бот успешно запущен и готов к работе!`);
}

async function mathdedymer() {
    let n, a, max
    let b = false
    max = 0
    n = 3
    for (let i = 0; i < 3; i++) {
        a = i + 2 // вводим текст
    }
    if (a > max) max = a
    if (a < 30) b = true
    console.log(max)
    if (b == true) console.log("YES")
    else console.log("NO")

}

run().catch(console.error);


process.on("uncaughtException", e => {
    console.log(e);
});

process.on("unhandledRejection", e => {
    console.log(e);
});