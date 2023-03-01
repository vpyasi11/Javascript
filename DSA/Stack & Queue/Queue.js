class queue{
    constructor(){
        this.elements = [];
    }

    enqueue(item){
        this.elements.push(item)
    }

    dequeue(){
        return this.elements.shift()
    }

    top(){
        return this.elements[0]
    }

    size(){
        return this.elements.length
    }

    display(){
        return this.elements.join(' ')
    }
}

let q1 = new queue()
q1.enqueue(7)
q1.enqueue(8)
q1.enqueue(9)
q1.enqueue(10)
console.log(q1)
q1.dequeue(q1)
console.log(q1)