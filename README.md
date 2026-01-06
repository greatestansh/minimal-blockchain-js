# Minimal Blockchain Implementation (JavaScript)

## Overview
This project implements a simple blockchain from scratch using JavaScript to demonstrate hashing, block chaining, and data integrity.

---



## Blockchain Logic
- The blockchain is an array of blocks
- The first block is the genesis block
- Each block references the previous block’s hash
- New blocks are added using `addBlock()`

---

## Validation Logic
The `isValid()` function ensures:
1. Each block’s hash is correct
2. Each block’s `previousHash` matches the previous block’s hash

Any tampering breaks the chain.


## How to Run
in bash/terminal
node blockchain.js
