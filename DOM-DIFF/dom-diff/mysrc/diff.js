/*
* 规则：
 1、当节点类型相同时，看属性是否相同，产生一个属性的补丁包{type：‘ATTRS’，啊TTRS：{class：‘list-group'}
 - 新的节点不存在： {type：’REMOVE‘，index：xxx}
 - 节点类型不相同：直接采用替换模式：{type：’REPLACE‘，newNode：newNode}
 - 文本的变化：{type：’TEXT'，text：1}
 *
* */


function diff(oldTree,newTree){
  let patches={};
  let index=0;
  //遍历 递归树 比较后的结果放到补丁中
  walk(oldTree,newTree,index,patches);
  return patches;
}
function diffAttr(oldAttrs,newAttrs) {
  let patch={};
  //判断老的属性和新的属性的关系
  for (let key in oldAttrs){
    if(oldAttrs[key]!==newAttrs[key]){
      patch[key]=newAttrs[key];//有可能undefined
    }
  }
  //new 新的中多的属性
  for(let key in newAttrs){
    //老节点中没有新节点的属性
    if(!oldAttrs[key].hasOwnProperty(key)){
      patch[key]=newAttrs[key];
    }
  }
  return patch;
}
function walk(oldTree,newNode,index,patches) {
  let currentPatch=[];
  //比较属性是否有更改
  if(oldTree.type===newNode.type){
    let attrs=diffAttr(oldTree.props,newNode.props);
    if(Object.keys(attrs).length>0){
      currentPatch.push({type:'ATTRS',attrs})
    }
  }
  if(currentPatch.length>0){
    //当前元素确实有补丁，将元素和补丁对应起来 放到补丁包中
    patches[index]=currentPatch;
    console.log(patches);
  }
}


export  { diff }