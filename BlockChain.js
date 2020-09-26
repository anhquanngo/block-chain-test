const md5 = require('md5');
const { initBlock, condition } = require('./constant');
const Block = require('./Block');

class BlockChain {
    constructor() {
        this.chain = [this.initChain()];
    }
    initChain() {
        let newBlock = new Block(initBlock);
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

let blockChain = new BlockChain();
let chain = blockChain.chain;

let prevhash = chain[chain.length - 1].hash;

let newBlock = new Block(prevhash);

console.log(newBlock);

blockChain.addNewBlock(newBlock);

console.log(blockChain);



// console.log(blockChain);
