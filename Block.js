/**
 * Block {prevhash, hash, count}
 */
const md5 = require('md5');


const { condition } = require('./constant');


class Block {
    constructor(prevhash) {
        this.prevhash = prevhash;
        this.hash = this.getHash();


    }

    getHash() {
        let count = 0;
        let newHash;
        let last = Date.now()
        for (let i = 0; i < 1000000000000; i++) {
            let data = this.prevhash + i
            count++;

            if (Date.now() - last > 2000) {
                last = Date.now();
                console.clear();
                console.log("total cal", count);
                count = 0;
            }
            newHash = md5(data);
            if (condition.test(newHash)) {
                console.log(newHash);

                console.log("i: " + i);
                break;

            }

        }

        return newHash;
    }
}

// console.log(new Block("djkdjkfd"));
module.exports = Block;
