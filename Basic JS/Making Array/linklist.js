class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    enqueue(node) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.size++;
      } else {
        this.tail.next = node;
        this.tail = node;
        this.size++;
      }
    }
  
    dequeue() {
      if(this.head==null){
        console.log("Cant dequeue empty queue!")
      }else{
        this.head = this.head.next;
        this.size--;
      }
    }
  
    find(v) {
      if(this.head==null){
        console.log("Cant check empty queue!")
      }else{
          let temp = this.head;
          while(temp !==null){
            if(temp.name === v){
              return true
            }else{
             temp = temp.next
            }
          }
          return false;
  
        }
      }
    }
  
    size() {
      return this.size;
    }
  
   
  
  
  class Node {
    constructor(name) {
      this.name = name;
      this.next = null;
  
    }
  }
  
  let myQueue = new Queue();g
  let firstNode = new Node("fehmi");
  let secondNode = new Node("vehbi");
  let third = new Node("melih");
  
  myQueue.enqueue(firstNode);
  myQueue.enqueue(secondNode);
  myQueue.enqueue(third);