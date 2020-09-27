/**
 * Block {prevhash, hash, count}
 */
const md5 = require('md5');


const { condition } = require('./constant');


class Block {
    constructor(prevhash, nonce) {
        this.nonce = nonce
        this.prevhash = prevhash;
        this.data = this.randomData()
        this.hash = this.getHash()

    }

    randomData() {
        let data = Math.random();
        return data
    }

    getHash() {
        let newHash;
        let hash = this.prevhash + this.nonce

        newHash = md5(hash);
        if (condition.test(newHash)) {
            return newHash;

        }

    }
}

module.exports = Block;
