// Binary search tree

// Applications : DOM, data parsing, relational database, search history, hierarchical methods

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root == null){
            this.root = newNode;
        }
        else{
            let curr = this.root;
            while(true){
                if(value>curr.value){      // doubt : if equal ?
                    if(curr.right == null){
                        curr.right = newNode;
                        break;
                    }
                    else{
                        curr = curr.right;
                    }
                }
                else if(value<curr.value){
                    if(curr.left == null){
                        curr.left = newNode;
                        break;
                    }
                    else{
                        curr = curr.left;
                    }
                }
            }
        }
    }

    // Search by recursion
    search(root, value){
        
        if(root == null) return false;   
        else{
            if(root.value === value){
                return true;
            } 
            else{
                if(value < root.value){
                    return this.search(root.left, value)
                }
                else{
                    return this.search(root.right, value)
                }
            }
        }  
    }

    //Search by updating root value
    Search(value){
        if(this.root == null) return false;   
        else{
            let curr = this.root;
            while(curr){
                if(curr.value === value){
                    return true;
                } 
                else{
                    if(value < curr.value){
                        curr = curr.left;
                    }
                    else{
                        curr = curr.right;
                    }
                }
            }
            return false;
        }
    }

    getMin(node = this.root){
        while(node.left){
            console.log(node)
            node = node.left;
        }
        return node.value;
    }

    getMax(node = this.root){
        while(node.right){
            node = node.right;
        }
        return node.value; 
    }

    // Traversing a tree
      // DFS or BFS(depthfirst search or breadth first search)
        // Inorder: left, root, right (DBEACFCG)
        // preorder: root, left, right
        // postorder: left, right, root


    arr = [];
    inorder(node){
        if(node!==null){
            this.inorder(node.left)
            // console.log(node.value)
            this.arr.push(node.value);
            this.inorder(node.right)
        }
    }
    preorder(node){
        if(node!==null){
            console.log(node.value)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    postorder(node){
        if(node!==null){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.value)
        }
    }

    traversal(p){
        let inorder = (node)=>{
            if(node.left!==null){
                inorder(node.left);
            }
            inorder(this.root);
            if(node.right!==null){
                inorder(node.right);
            }
        }
    }

    // Array conversion

    // arrTree(){
    //     let arr = [];
    //     this.inorder(node => {
    //         arr.push(node.value)
    //     })
    //     console.log(arr); 
    // }

    nthlargest(n){
        return this.arr[this.arr.length - (n)]
    }

    remove(value){
        for(var curr = this.root; curr.value !== value; curr = curr.right){
            if(curr.right.value == value) curr.right.value = null
        }
    }
}

const t1 = new BinarySearchTree();
t1.insert(70);
t1.insert(60);
t1.insert(65);
t1.insert(90);
t1.insert(55);
t1.insert(80);
t1.insert(100);

// console.log(t1);
// console.log(t1.search(t1.root, 999))
// console.log(t1.getMin())
// console.log(t1.getMax())
// console.log(t1.Search(65));
// t1.remove(65);

// console.log("Inorder:")
// console.log(t1.inorder(t1.root))
// console.log(t1.arr)
// console.log("Preorder:")
// console.log(t1.preorder(t1.root))
// console.log("Postorder:")
// console.log(t1.postorder(t1.root))

// console.log(t1.arrTree());
// console.log(t1.nthlargest(4))

t1.remove(100)