class hashTable{
    constructor(size = 8){ // creating array of length 8
        this.buckets = new Array(size);
        this.size = size;
    }

    hash(key){
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }

        let hash = sum % this.size; 

        return hash;
    }

    insert(key, value){
        let h = this.hash(key)
        // this.buckets[h].push([key,value])
        return (this.buckets[h] = value)
    }

    search(key){
        // get(key) {
        //     return this.bucket[this.Hash(key)];
        // }

        // let h = this.hash(key)
        // if(!this.buckets[h]){
        //     return console.log("out of index")
        // }
        // for(let i of this.buckets[h]){
        //     if(i[0] === key){
        //         return i[1]
        //     }
        // }
        return this.buckets[this.hash(key)];
    }
}

const newInstance = new hashTable(9)
newInstance.insert('101','anuj')
newInstance.insert('102','shakul')
newInstance.insert('103','malik')
newInstance.insert('301','agrawal')
newInstance.insert('301','aaaa')
console.log(newInstance.search('101'))
console.log(newInstance.search('301'))

console.log(newInstance)


