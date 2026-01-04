# Minimal Blockchain Implementation (JavaScript)

## Overview
This project implements a simple blockchain from scratch using JavaScript to demonstrate hashing, block chaining, and data integrity.

---

## Block Structure
Each block contains:
- `index`: Position of the block in the chain
- `timestamp`: Time of block creation
- `data`: Stored information
- `previousHash`: Hash of the previous block
- `nonce`: Value used for Proof-of-Work
- `hash`: SHA-256 hash of all fields

SHA-256 ensures immutability and tamper detection.

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

---

## Proof-of-Work (Bonus)
Proof-of-Work is implemented by:
- Incrementing a nonce
- Recalculating the hash until it starts with `"00"`
- Difficulty is adjustable

This simulates mining effort.

---

## How to Run
```bash
node blockchain.js
