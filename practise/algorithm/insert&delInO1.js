//利用map 、set 实现在集合（可重复）用O(1)的时间 删除插入与获取随机数的操作
//random 取值【0，1） 左闭右开
/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.map=new Map();
  this.arr=[];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  this.arr.push(val);
  let set=this.map.has(val)?this.map.get(val):new Set();
  set.add(this.arr.length-1);
  this.map.set(val,set);
  return set.size===1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if(!this.map.has(val))return false;
  let set=this.map.get(val);
  console.log('remove',set);
  let i=undefined;
  for(let s of set){
    if(!i){
      i=s;
      break;
    }
  }
  let lastName=this.arr[this.arr.length-1];
  this.arr[i]=lastName;
  this.map.get(val).delete(i);
  this.map.get(lastName).delete(this.arr.length-1);
  if(i<this.arr.length-1)this.map.get(lastName).add(i);
  if(this.map.get(val).size==0){
    this.map.delete(val);
  }
  this.arr.pop();
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  return  this.arr[Math.floor(Math.random() * this.arr.length)];
};