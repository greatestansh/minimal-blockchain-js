let crypto = require("crypto");

class Block {
    constructor(index, timestamp, data, previousHash = "", nonce = 0) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = nonce;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto
            .createHash("sha256")
            .update(
                this.index +
                this.timestamp +
                JSON.stringify(this.data) +
                this.previousHash +
                this.nonce
            )
            .digest("hex");
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2; 
    }

    createGenesisBlock() {
        return new Block(0, Date.now(), "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data) {
        const previousBlock = this.getLatestBlock();
        const newBlock = new Block(
            this.chain.length,
            Date.now(),
            data,
            previousBlock.hash
        );

        this.mineBlock(newBlock);
        this.chain.push(newBlock);
    }

    mineBlock(block) {
        const target = "0".repeat(this.difficulty);

        while (block.hash.substring(0, this.difficulty) !== target) {
            block.nonce++;
            block.hash = block.calculateHash();
        }
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const current = this.chain[i];
            const previous = this.chain[i - 1];

            if (current.hash !== current.calculateHash()) {
                return false;
            }

            if (current.previousHash !== previous.hash) {
                return false;
            }
        }
        return true;
    }
}


const myBlockchain = new Blockchain();
myBlockchain.addBlock("First block data");
myBlockchain.addBlock("Second block data");

console.log("Blockchain valid?", myBlockchain.isValid());