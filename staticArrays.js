class StaticArrays {
    staticArr = [];
    size = 0;
  
    constructor(size) {
      this.size = size;
    }
  
    
  
    get(index) {
      if(index > this.size - 1) {
        throw 'index out of bounds error';
      }
      else {
        return this.staticArr[index];
  
      }
    }
  
    set(value) {
      console.log('setting method');
      if(this.staticArr.length == this.size) {
        throw 'array is full';
      }
      else {
        this.staticArr.push(value);
      }    
      console.log(this.staticArr);
    }
    
  
  }
  
  let array = new StaticArrays(2);
  array.set(1);
  array.set(2);
  console.log('value-----'+array.set(3));
  