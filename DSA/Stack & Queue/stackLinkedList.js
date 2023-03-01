class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stackList{
    constructor(value){
        this.head = {value: value, next:null};
        this.tail = this.head;
        this.length = 1;
    }

    // linked list as stack : by insertion/deletion at head
    // can replicate the same at tail
    add(value){
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

    remove(){
        let temp;
        if(this.head == null){
            return null
        }
        else{
            temp = this.head;
            this.head = this.head.next;
            this.length--;
        }
        return temp.value;
    }
}

let s1 = new stackList(10)
s1.add(20)
s1.add(30)
s1.add(40)
s1.add(50)
console.log(s1)
console.log(s1.remove())
console.log(s1)