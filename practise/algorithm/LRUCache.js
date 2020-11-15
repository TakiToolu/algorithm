
/**
 * @param {number} capacity缓存数
 * 实现 LRUCache 类：
 LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 */
var LRUCache = function(capacity) {
  this.set=new Set();
  this.map=new Map();
  this.capacity=capacity;
};
LRUCache.prototype.get = function(key) {
  if(this.map.has(key)){
    let val=this.map.get(key);
    this.set.delete(key)
    this.set.add(key);
    return val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

  if(!this.map.has(key)){
    if(this.set.size==this.capacity){
      let temp=this.set.values().next().value;
      this.set.delete(temp);
      this.map.delete(temp);
    }
  }else{
    this.set.delete(key);
  }
  this.set.add(key);
  this.map.set(key,value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */