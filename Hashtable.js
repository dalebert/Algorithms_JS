class Hashtable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let idx = this._hash(key);
        if (!this.keyMap[idx]) {
            this.keyMap[idx] = [];
        }
        this.keyMap[idx].push([key, value]);
    }
    get(key) {
        let idx = this._hash(key);
        let arr = this.keyMap[idx];
        if (!arr) return null;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] === key) return arr[i][1];
        }
        return null;
    }
    keys() {
        let myKeys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                let arr = this.keyMap[i];
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j] && (!myKeys.includes(arr[j][0]))) myKeys.push(arr[j][0]);
                }
            }
        }
        return myKeys;
    }
    values() {
        let myValues = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                let arr = this.keyMap[i];
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j] && !myValues.includes(arr[j][1]))
                        myValues.push(arr[j][1]);
                }
            }
        }
        return myValues;
    }
}

var ht = new Hashtable(4);
ht.set('goober', 'schnobber')
ht.set('air', 'water')
ht.set('fire', 'water')
ht.set('fire', 'buckets')
ht.get('goober')
