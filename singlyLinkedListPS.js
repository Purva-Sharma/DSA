/*clear
size
isEmpty
add
addFirst(T value)
addLast(T value)
removeFirst()
removeLast()
remove(Node<T> node)
removeAt(index)
indexOf(obj) 
display()*/ 

class SinglyLinkedList {
    head;
    tail;  
    size;
  
    constructor(size) {
      this.size = size;
    }
  
    addFirst(elem) {
      console.log('addFirst');
      if(this.head == null) {
        let node = new Node(elem, null);
        this.head = node;
        this.tail = node;
      }
      else {
        let node = new Node(elem, this.head);
        this.head = node;
      }      
    }
  
    addLast(elem) {
      if(this.head == null) {
         this.addFirst(elem);
      }
      else {      
        let node = new Node(elem,null);
        this.tail.next = node;    
        this.tail = node;
      }
    }
  
    add(elem) {
      this.addLast(elem);
    }
  
    display() {
      let temp = this.head;  
      console.log('Displaying all values---')
       do {        
          console.log(temp.value);
          temp = temp.next;
        }while(temp != null);
    }
  
    
    removeLast() {
        console.log('removing last');
        let temp = this.head;
        do {
            temp = temp.next;
          }while(temp.next != this.tail);
        this.tail = temp;
        console.log('new tail ---'+this.tail.value);
        temp.next = null;
    }

    removeFirst() {
        console.log('removing first');
        this.head = this.head.next;
    }

    remove(elem) {
        console.log('removing elem');
        let prevTemp;
        let temp = this.head;
        let tempVal = temp.value;
        
        do {
            prevTemp = temp;
            temp = temp.next ;
            tempVal = temp.value;

        }while(tempVal != elem || temp.next == null);
        if(tempVal == elem) {
            prevTemp.next = temp.next;
        }

    }

    removeAt(index) {
        console.log('to remove from --'+ index);
        let prevTemp;
        let temp = this.head;
        let count = 0;
        do {
            prevTemp = temp;
            temp = temp.next;
            count = count + 1;
        }
        while(count != index);
        prevTemp.next = temp.next;
        console.log('removed --'+temp.value);

    }

    indexOf(elem) {
        let temp = this.head;
        let count = 0;
        do {
            temp = temp.next;
            count = count + 1;

        }while(temp.value != elem || temp.next != null);
        return count;
    }
    
  
  }
  
  class Node {
     value;
     next;
  
     constructor(value, next) {
       this.next= next;
       this.value = value;
     }
  }
  
  var LL = new SinglyLinkedList(6);
  LL.addFirst(10);
  LL.addLast(33);
  LL.add(444);
  LL.add(555);
  LL.addFirst(20);
  LL.addFirst(66);
  LL.display();
  LL.removeFirst();
  LL.removeLast();
  LL.display();
  LL.remove(10);
  LL.display();
  LL.removeAt(1);
  LL.display();
  console.log(LL.indexOf(444));
  
  
  
  
  
  
  
  
  
  
