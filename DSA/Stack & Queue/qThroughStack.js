class queue{
    constructor(){
        this.insertionStack = []
        this.deletionStack = []
    }

    enqueue(value){
        this.insertionStack.push(value)
    }

    dequeue(){
        if(this.deletionStack.length === 0){
            while(this.insertionStack.length>0){
                var temp = this.insertionStack.pop()
                this.deletionStack.push(temp)
            }
        }
        var popped = this.deletionStack.pop()
        while(this.deletionStack.length>0){
            var temp = this.deletionStack.pop()
            this.insertionStack.push(temp)
        }
        return popped;
    }

    print(){
        return this.insertionStack.toString()
    }
}

let qs = new queue()
qs.enqueue(10)
qs.enqueue(20)
qs.enqueue(30)
qs.enqueue(40)
qs.enqueue(50)
console.log(qs)
qs.dequeue()
console.log(qs)
qs.enqueue(60)
console.log(qs)
