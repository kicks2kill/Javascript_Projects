class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for( let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key,value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    get(key) {
        //hash to get an idx
        let index = this._hash(key);
        //check if the keyMap holds that index
        if(this.keyMap[index]) {
            //check over every item in that index
           for(let i =0; i < this.keyMap[index].length;i++){
               //is that equal to the key we're looking for?
               if(this.keyMap[index][i][0] == key){
                   return this.keyMap[index][i][1];
               }
           }
        }
        return undefined;
    }
} 