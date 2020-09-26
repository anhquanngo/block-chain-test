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
        let newHash;
        let count;
        for (let i = 0; i < 1000000000000; i++) {
            let data = this.prevhash + Date.now();
            newHash = md5(data);
            console.log(newHash);
            if (condition.test(newHash)) {
                break;
                }

         }
         return newHash;
    }
}

// console.log(new Block("djkdjkfd"));
module.exports = Block;
