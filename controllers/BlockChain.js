const { initBlock, condition } = require('./constant');
const Block = require('./Block');

class BlockChain {
    constructor() {
        this.chain = [this.initChain()];
    }

    initChain() {
        let newBlock = new Block(initBlock, 0);
        return newBlock;
    }

    addNewBlock(newBlock) {
        let checkNewBlock = this.validBlock(newBlock);
        if (checkNewBlock) {
            this.chain.push(newBlock);
            console.log("Block is added");
        } else {
            console.log("Block is denied");
        }
    }


    validBlock(newBlock) {
        let prevhash = this.chain[this.chain.length - 1].hash;
        let hash = newBlock.hash;
        return condition.test(hash);
    }
}


module.exports = BlockChain



// console.log(blockChain);
