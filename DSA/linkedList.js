class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(value){
        this.head = {value: value, next:null};
        this.tail = this.head;
        this.length = 1;
    }

    // Add node as tail

    append(value){
        const newNode = new node(value);
        if(this.head == null){
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;   
            this.length++;
        }
    
       return this;
    }

    // Add node as new head

    prepend(value){
        const preNode = new node(value);
        if(this.head == null){
            this.head = preNode;
        }
        else{
            preNode.next = this.head;
            this.head = preNode;
            this.length++;
        }
        return this;
    }

    insert(index, value){
        const newNode = new node(value);
        let count = 1;
        let currentNode = this.head;

        while(count < index){
            currentNode = currentNode.next;
            count++;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;

        return this;
    }

    deleteTail(){
        let currentNode = this.head;

        while(currentNode.next.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
    }

    deleteHead(){
        this.head = this.head.next;
        this.length--;
        return this;
    }

    delete(index){
        let count = 1;
        let currentNode = this.head;

        if(index == 0){
            this.deleteHead()
        }
        else if(currentNode.next.next == null){
            this.deleteTail();
        }
        else{
                
            while(count < index){
                currentNode = currentNode.next;
                count++;
            }

            currentNode.next = currentNode.next.next;
            this.length--;
            return this;
        }
    }

    print(){
        const arr = [];
        let currentNode = this.head;

        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr
    }

    search(key){
        let currentNode = this.head;

        while(currentNode !== null){
            if(currentNode.value == key){
                return true;
            }
            
            currentNode = currentNode.next;
        }
        return false;
    }
}

let l1 = new linkedList(1);
l1.append(10);
l1.append(3).append(4).append(5);
// console.log(l1);

l1.prepend(50);
l1.prepend(49);
// console.log(l1);

l1.insert(1, 100);
// console.log(l1);

// console.log(l1.print());

l1.delete(1)
// console.log(l1.print());
// console.log(l1.search(50))
// console.log(l1.search(19))



let l2 = new linkedList(10);
l2.append(20);
l2.append(30);
l2.append(40);
l2.append(50);
// console.log(l2.print())

let l3 = new linkedList(10);
l3.append(20);
l3.append(30);
l3.append(40);
l3.append(50);
l3.append(20);
l3.append(30);
l3.append(40);
l3.append(50);
// console.log(l3.print())

// Write a function to check if the given two linked lists are identical

function identical(a,b){
    if(a.length == b.length){

        // Returns array of elements
        const arr1 = a.print();
        const arr2 = b.print();

        if(arr1.join() == arr2.join()) return true
        else return false

    }
    else return false
}

// console.log(identical(l2,l3))

/* Given a sorted linked list which has some duplicate elements, 
 your task is to remove all the duplicate elements from the given Linked List. */

function duplicates(list){
    const arr = list.print()
    const arr1 = []
    var duplicate = 0
    arr.forEach(element => {
        if(arr1.includes(element)){
            duplicate++ // count no. of duplicates removed
        }
        else{
            arr1.push(element)
        }
    });
    const li = new linkedList(arr1[0])
    for(i=1;i<arr1.length;i++) li.append(arr1[i])
    list = li
    console.log(list.print())
    return list
}

l3 = duplicates(l3)
// console.log(l3)

// Given the head of a singly linked list, reverse the list, and return the reversed list

function reverse(list){
    const arr = list.print()
    let temp = []
    for(i=arr.length-1;i>=0;i--){
        temp[i] = arr[arr.length-i-1]
    }
    const li = new linkedList(temp[0])
    for(i=1;i<temp.length;i++) li.append(temp[i])
    list = li
    console.log(list)
    return list
}

l3 = reverse(l3)
