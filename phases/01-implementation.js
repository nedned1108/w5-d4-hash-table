class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let newPair = new KeyValuePair(key, value);
    let idx = this.hashMod(key);
    let curr = this.data[idx];
    
    if (this.data[idx]) {
      while (curr && curr.key !== newPair.key) {
        curr = curr.next;
          
      }
      if (!curr) {
        newPair.next = this.data[idx]
        this.data[idx] = newPair;
        this.count++
        return;
      }
      curr.value = newPair.value
      return;
    }
    this.data[idx] = newPair;
    
    this.count++;
    
    return
  }


  read(key) {
    // Your code here
    const index = this.hashMod(key);
    let current = this.data[index];
    while (current) {
    if (current.key === key) {
      return current.value
    }
    current = current.next
  }
  return undefined;
}

  resize() {
    // Your code here
    let current = this.data;
    this.capacity = this.capacity * 2;
    
    this.count = 0;
    this.data = new Array(this.capacity).fill(null)
    
    for (let i = 0; i < current.length; i ++) {
      let currentKey = current[i];

      while (currentKey) {
        this.insert(currentKey.key, currentKey.value);
        currentKey = currentKey.next;
      }
    }
  }
  

  delete(key) {
    // Your code here
    if (!this.read(key)) {
      return "Key not found";
    } else {
      let current = this.read(key);
      
    }
  }
}


module.exports = HashTable;
  




