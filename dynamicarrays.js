
class DynamicArrays {
    dynamicArr;
    size = 0;
  
    constructor(size) {
      this.size = size;
      this.dynamicArr = new StaticArrays(size);
    }
  
    get(index) {
      console.log('get value from dynamic arr');
      return this.dynamicArr.get(index);
    }
  
    set(value) {
      console.log('setting value in dynamic arr');
      try {
        this.dynamicArr.set(value);
      }
      catch(error) {
        console.log('doubling size');
        let tempArr = new StaticArrays(this.size*2);
        for(var i=0 ; i<this.size ; i++) {
          tempArr.set(this.dynamicArr.get(i));
        }
        tempArr.set(value);
        this.size = tempArr.length;
        this.dynamicArr = tempArr;
      }
    }
  
    getSize() {
      return this.size;
    }
  }
  
  
  let array = new DynamicArrays(2);
  console.log('length----'+array.getSize());
  array.set(1);
  array.set(2);
  array.set(3);
  console.log('value-----'+array.get(2));
  console.log('length----'+array.getSize());
  
  