/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LinkedList, LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LinkedList();
    oldStorage.each((bucket) => {
      if (!bucket) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }

  capacityIsFull() {
    let fullCells = 0;
    const node = new LinkedList();
    this.storage.each((node) => {
      if (node !== undefined) fullCells++;
    });
    return fullCells / this.limit >= 0.75;
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    let currentNode = new LinkedList();
    if (this.capacityIsFull()) this.resize();
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = currentNode.contains(index) || [];

    currentNode = currentNode.filter(item => item[0] !== key);
    currentNode.addToTail([key, value]);
    this.storage.set(index, currentNode);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    let node = new LinkedList();
    this.storage = node;
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = node.contains(index);

    if (bucket) {
      bucket = bucket.filter(item => item[0] !== key);
      node.addToTail(index, bucket);
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    let node = new LinkedList();
    const index = getIndexBelowMax(key.toString(), this.limit);
    this.storage = node;
    const bucket = this.storage.contains(index);
    let retrieved;
    if (bucket) {
      retrieved = bucket.filter(item => item[0] === key)[0];
    }

    return retrieved ? retrieved[1] : undefined;
  }
}

module.exports = HashTable;
