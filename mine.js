const readline = require('readline-sync');
const fs = require('fs');
const crypto = require("crypto"),
    SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");
let webm = require('./user.json');
let blockchain = require('./blockchain.json');
let blockchainno = require('./blockchainno.json');
let transaction = require('./transaction.json');
const util = require('./include/util');
let prov1 = fs.readFileSync('./transaction.json', 'utf8')
let prov2 = fs.readFileSync('./blockchain.json', 'utf8')
let prov3 = fs.readFileSync('./blockchainno.json', 'utf8')
let provnad
let output
let podtv = 0
let summamine = 500000
async function run() {
    //const boolver = readline.question("У тебя есть кошелёк?: ");
    const idlast = SHA256(util.str_rand(20));
    const idshifr = SHA256(util.str_rand(50));
    output = readline.question("Send webm: ")



}










function mine(list, sozd, data, hashlast) {
    let chestno = false;
    let i = 0;
    var hash = {
        list: list,
        sozd: sozd,
        data: data,
        hashlast: hashlast.hash,
        podt: []

    }
    try {
        prov1 = JSON.parse(fs.readFileSync('./transaction.json', 'utf8'))
        prov3 = JSON.parse(fs.readFileSync('./blockchainno.json', 'utf8'))
        prov2 = JSON.parse(fs.readFileSync('./blockchain.json', 'utf8'))
        var str = fs.readFileSync('./user.json', 'utf8')
        webm = JSON.parse(str);
    } catch (e) {
        prov1 = JSON.parse(fs.readFileSync('./transaction.json', 'utf8'))
        prov3 = JSON.parse(fs.readFileSync('./blockchainno.json', 'utf8'))
        prov2 = JSON.parse(fs.readFileSync('./blockchain.json', 'utf8'))
        var str = fs.readFileSync('./user.json', 'utf8')
        webm = JSON.parse(str);
    }
    let test
    while (chestno == false) {
        test = SHA256(JSON.stringify(hash) + i)


        try {
            blockchain = JSON.parse(fs.readFileSync('./blockchain.json', 'utf8'));
        } catch (e) {
            return console.log("Ищу следущий блок...")
        }

        if (JSON.stringify(prov2, null, '\t') != JSON.stringify(blockchain, null, '\t')) {
            console.log("Ищу следущий блок...")
            return
        }
        i++
        if (slojno(4, test) == 1) {

            let str2 = fs.readFileSync('./blockchain.json', 'utf8')
            let str3 = fs.readFileSync('./blockchainno.json', 'utf8')
            blockchain = JSON.parse(str2);
            blockchainno = JSON.parse(str3);

            if (JSON.stringify(prov2, null, '\t') != JSON.stringify(blockchain, null, '\t')) {
                prov2 = JSON.parse(fs.readFileSync('./blockchain.json', 'utf8'))
                return console.log("Ищу следущий блок...")
            }

            blockchain.push({
                id: blockchain.length,
                hash: test
            });
            blockchainno.push({
                hash: hash,
                sloj: i,
            });
            // я работал сдесь 
            var d = new Date();
            for (let j = 0; j < hash.list.length; j++) {
                if (hash.list[j].output == "COINBASE") {
                    if (hash.list[j].podt.length > hash.list[j].mempul.length) {
                        for (let u = 0; u < webm.length; u++) {
                            if (webm[u].niceid == hash.list[j].input) {
                                d = new Date()
                                webm[u].transaction.push({
                                    output: hash.list[j].output,
                                    input: hash.list[j].input,
                                    summa: hash.list[j].summa,
                                    idtransaction: hash.list[j].idtransaction,
                                    date: d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ":" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds() + ":" + d.getMilliseconds(),
                                    block: test,
                                    podt: [{
                                        "webm": output
                                    }],
                                    mempul: [],
                                });
                                break
                            }
                        }
                    }
                } else {
                    for (let i = 0; i < webm.length; i++) {
                        if (webm[i].niceid == hash.list[j].output) {
                            for (let w = 0; w < webm[i].transaction.length; w++) {
                                if (hash.list[j].idtransaction == webm[i].transaction[w].idtransaction) {
                                    webm[i].transaction[w].block = test
                                    if (hash.list[j].podt.length > hash.list[j].mempul.length) {
                                        webm[i].transaction[w].podt.push({
                                            webm: output
                                        });
                                        for (let u = 0; u < webm.length; u++) {
                                            if (webm.niceid == hash.list[j].input) {
                                                webm[u].transaction.push({
                                                    output: hash.list[j].output,
                                                    input: hash.list[j].input,
                                                    summa: hash.list[j].summa,
                                                    idtransaction: hash.list[j].idtransaction,
                                                    date: d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ":" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds() + ":" + d.getMilliseconds(),
                                                    block: test,
                                                    podt: [{
                                                        "webm": output
                                                    }],
                                                    mempul: [],
                                                });
                                            }
                                        }
                                    } else {
                                        webm[i].transaction[w].mempul.push({
                                            webm: output
                                        });
                                    }
                                }
                            }
                        }
                    }

                }

            }
            let str1 = fs.readFileSync('./transaction.json', 'utf8')
            transaction = JSON.parse(str1);
            d = new Date();
            transaction.push({
                output: "COINBASE",
                input: output,
                summa: summamine,
                idtransaction: transaction[transaction.length - 1] == null ? SHA256("COINBASE" + output + summamine) : SHA256("COINBASE" + output + summamine + transaction[transaction.length - 1].idtransaction),
                date: d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ":" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds() + ":" + d.getMilliseconds(),
                block: "",
                podt: [],
                mempul: [],
            });
            let summa = 0
            for (let j = 0; j < webm.length; j++) { // цикл из базы кошельков
                if (webm[j].niceid == output) { // проверка есть ли у пользователя такая транзакция
                    for (let p = 0; p < webm[j].transaction.length; p++) { // цикл из всех транзакций пользователя 
                        if (webm[j].transaction[p].block != "") { // проверка есть транзакция в блоке блокчейна
                            for (let g = 0; g < blockchain.length; g++) { // цикл из блокчейна
                                if (webm[j].transaction[p].block == blockchain[g].hash) { //есть ли транзация в блоке
                                    if (webm[j].transaction[p].podt.length > podtv && webm[j].transaction[p].podt.length > webm[j].transaction[p].mempul.length) { //валидна ли транзакция
                                        if (webm[j].transaction[p].output == output) {

                                            summa -= webm[j].transaction[p].summa
                                        } else {
                                            summa += webm[j].transaction[p].summa
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                }
            }
            console.log(summa / 100000 + " DC в кошельке")
            for (let i = 0; i < transaction.length; i++) {
                for (let j = 0; j < list.length; j++) {
                    if (transaction[i].idtransaction == list[j].idtransaction) {

                        transaction[i].block = test
                    }
                }

            }
            require('fs').writeFileSync('./transaction.json', JSON.stringify(transaction, null, '\t'));
            require('fs').writeFileSync('./blockchain.json', JSON.stringify(blockchain, null, '\t'));
            require('fs').writeFileSync('./blockchainno.json', JSON.stringify(blockchainno, null, '\t'));
            require('fs').writeFileSync('./user.json', JSON.stringify(webm, null, '\t'));
            console.log("Хэш: " + test + " " + "Количество попыток: " + i)
            console.log("Ищу следущий блок...")
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

async function ming() {
    let str2 = fs.readFileSync('./blockchain.json', 'utf8')
    let str3 = fs.readFileSync('./blockchainno.json', 'utf8')
    var str = fs.readFileSync('./user.json', 'utf8')
    webm = JSON.parse(str);
    let str1 = fs.readFileSync('./transaction.json', 'utf8')
    transaction = JSON.parse(str1);
    let valid = true
    blockchain = JSON.parse(str2);
    blockchainno = JSON.parse(str3);
    provnad = JSON.parse(prov1)
    let nice = true
    let nicenice = true
    let proverkatrans = true
    let test = true

    if (prov1 != str1) {

        for (let i = 1; i < transaction.length; i++) {
            let summa = 0;
            for (let j = 0; j < transaction[i].mempul.length; j++) {

                if (transaction[i].mempul[j].webm == output) {
                    nice = false
                }
            }
            for (let j = 0; j < transaction[i].podt.length; j++) {
                if (transaction[i].podt[j].webm == output) {
                    nice = false
                }
            }
            if (transaction[i].mempul.length > 7) {
                nice = false

            }
            if (transaction[i].podt.length > 7) {
                nice = false

            }
            if (nice == true) {
                if (provnad[i] != null) {
                    if (transaction[i].output != "COINBASE" && transaction[i].block == "") {
                        for (let j = 0; j < webm.length; j++) { // цикл из базы кошельков
                            if (webm[j].niceid == transaction[i].output) { // проверка есть ли у пользователя такая транзакция
                                for (let p = 0; p < webm[j].transaction.length; p++) { // цикл из всех транзакций пользователя 
                                    if (webm[j].transaction[p].block != "") { // проверка есть транзакция в блоке блокчейна
                                        for (let g = 0; g < blockchain.length; g++) { // цикл из блокчейна
                                            if (webm[j].transaction[p].block == blockchain[g].hash) { //есть ли транзация в блоке
                                                if (webm[j].transaction[p].podt.length > podtv && webm[j].transaction[p].podt.length > webm[j].transaction[p].mempul.length) { //валидна ли транзакция
                                                    if (webm[j].transaction[p].output == output) {
                                                        summa -= webm[j].transaction[p].summa
                                                    } else {
                                                        summa += webm[j].transaction[p].summa
                                                    }

                                                }
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    } else if (transaction[i].output == "COINBASE" && transaction[i].block == "") {
                        let chestnblock = false
                        for (let j = 0; j < blockchainno.length; j++) {
                            if (transaction[i].input == blockchainno[j].hash.sozd) {
                                chestnblock = true
                            }
                        }
                        if (chestnblock == false) {
                            transaction[i].mempul.push({
                                webm: output,
                            })
                            proverkatrans = false
                        }
                    }
                    if (summa < transaction[i].summa && transaction[i].output != "COINBASE" && proverkatrans == true && transaction[i].block == "") {
                        //console.log(summa / 100000 + " У пользователя " + transaction[i].output)

                        transaction[i].mempul.push({
                            webm: output,
                        })
                        require('fs').writeFileSync('./transaction.json', JSON.stringify(transaction, null, '\t'));
                        proverkatrans = false
                    } else if (transaction[i].output != "COINBASE" && proverkatrans == true && transaction[i].block == "") {
                        //console.log(summa + " У пользователя " + transaction[i].output)
                    }
                    let nicetranos = true
                    if (transaction[i].podt.length < 6 && transaction[i].mempul.length < 6) {
                        for (let j = 0; j < transaction[i].mempul.length; j++) {
                            if (transaction[i].mempul[j].webm == output) {
                                nicetranos = false
                            }
                        }
                        for (let j = 0; j < transaction[i].podt.length; j++) {
                            if (transaction[i].podt[j].webm == output) {
                                nicetranos = false
                            }
                        }
                        if (nicetranos == true) {
                            if (SHA256(transaction[i].output + transaction[i].input + String(transaction[i].summa) + transaction[i - 1].idtransaction) != transaction[i].idtransaction && nice == true) {

                                console.log("Fake transaction hash")
                                transaction[i].mempul.push({
                                    webm: output,
                                })
                            } else {
                                if (proverkatrans == true) {
                                    transaction[i].podt.push({
                                        webm: output,
                                    })
                                }
                                test = true
                            }
                        }
                    }
                }
            }

            nice = true
        }

        // for (let j = 0; i < blockchain.length; i++) {

        // }

        require('fs').writeFileSync('./transaction.json', JSON.stringify(transaction, null, '\t'));
        let niceblock = []
        if (valid == true) {
            for (let i = 0; i < transaction.length; i++) {
                if ((transaction[i].podt.length != 0 || transaction[i].mempul.length != 0) && transaction[i].block == "") {

                    niceblock.push({
                        output: transaction[i].output,
                        input: transaction[i].input,
                        summa: transaction[i].summa,
                        idtransaction: transaction[i].idtransaction,
                        date: transaction[i].date,
                        block: transaction[i].block,
                        podt: transaction[i].podt,
                        mempul: transaction[i].mempul,
                    });

                }
            }


            if (niceblock + "" != "") {
                var d = new Date();
                console.log("Создание блока...")
                mine(niceblock, output, d.getFullYear() + "." + d.getMonth() + "." + d.getDate() + ":" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds() + ":" + d.getMilliseconds(), blockchain.length - 1 >= 0 ? blockchain[blockchain.length - 1] : SHA256(niceblock + output))
            }

        }
        try {
            str1 = fs.readFileSync('./transaction.json', 'utf8')
            str2 = fs.readFileSync('./blockchain.json', 'utf8')
            str3 = fs.readFileSync('./blockchainno.json', 'utf8')
            prov3 = fs.readFileSync('./blockchainno.json', 'utf8')
            prov2 = fs.readFileSync('./blockchain.json', 'utf8')
            prov1 = fs.readFileSync('./transaction.json', 'utf8')
        } catch (e) {
            str1 = fs.readFileSync('./transaction.json', 'utf8')
            str2 = fs.readFileSync('./blockchain.json', 'utf8')
            str3 = fs.readFileSync('./blockchainno.json', 'utf8')
            prov3 = fs.readFileSync('./blockchainno.json', 'utf8')
            prov2 = fs.readFileSync('./blockchain.json', 'utf8')
            prov1 = fs.readFileSync('./transaction.json', 'utf8')
        }
    }

    return true;
}
setInterval(async() => {
    await ming();

}, 350);

run().catch(console.error);

// if(valid != false){
//     var podt = 0;
//     console.log(1)
//     var niceblock = transaction.filter(function(val) {
//         console.log(val.podt)
//     return val.podt === podt;
//     });

//     if(niceblock!= null){
//         for(let  i = 0; i < niceblock.length; i++){
//             let userpol = user.find(x=> x.id === niceblock[i].output);
//             if(userpol != null){

//             }
//         }
//     }
//     console.log(niceblock);
// }