class stack{
    constructor(){
        this.elements = [];
    }

    push(item){
        this.elements.push(item);
    }

    pop(){
        return this.elements.pop();
    }

    top(){
        return this.elements[this.elements.length-1]
    }

    size(){
        return this.elements.length
    }

    display(){
        return this.elements.join(' ')
    }
}

let s1 = new stack();
s1.push(10)
s1.push(20)
s1.push(30)
s1.push(40)
console.log(s1)
s1.pop()
console.log(s1)

console.log(s1.top())
console.log(s1.size())
console.log(s1.display())