class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class queueList{
    constructor(value){
        this.head = {value: value, next:null};
        this.tail = this.head;
        this.length = 1;
    }

    // linked list as stack : by insertion/deletion at head
    // can replicate the same at tail
    enqueue(value){
        const newNode = new node(value);
        let temp;
        if(this.head == null){
            this.head = this.tail = newNode;
        }
        else{
            temp = this.head
            this.head = newNode
            this.head.next = temp
            this.length++
        }
        return this;
    }

    dequeue(){
        let temp
        let currentNode = this.head;

        while(currentNode.next.next !== null){
            currentNode = currentNode.next;
        }
        temp = this.tail
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return temp.value
    }
}

let s1 = new queueList(10)
s1.enqueue(20)
s1.enqueue(30)
s1.enqueue(40)
s1.enqueue(50)
console.log(s1)
console.log(s1.dequeue())
console.log(s1) 
