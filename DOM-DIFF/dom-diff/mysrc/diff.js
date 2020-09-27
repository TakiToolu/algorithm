/*
* 规则：
 1、当节点类型相同时，看属性是否相同，产生一个属性的补丁包{type：‘ATTRS’，啊TTRS：{class：‘list-group'}
 - 新的节点不存在： {type：’REMOVE‘，index：xxx}
 - 节点类型不相同：直接采用替换模式：{type：’REPLACE‘，newNode：newNode}
 - 文本的变化：{type：’TEXT'，text：1}
 *
* */
const ATTRS='ATTRS';
const TEXT='TEXT';
const REMOVE='REMOVE';
const REPLACE='REPLACE';
let Index=0;
//判断两个节点的差异并返回
function diff(oldTree,newTree){
  let patches={};
  // let index=0;
  // 遍历 递归树 比较后的结果放到补丁中
  patches=walk(oldTree,newTree,Index,patches);
  return patches;
}

//判断两个节点属性的差异并返回
function diffAttr(oldAttrs,newAttrs) {
  let patch={};
  for (let key in oldAttrs){
    if(oldAttrs[key]!==newAttrs[key]){
      patch[key]=newAttrs[key];//有可能undefined
    }
  }
  for(let key in newAttrs){//老节点中没有新节点的属性
    if(!oldAttrs.hasOwnProperty(key)){
      // console.log(key)
      patch[key]=newAttrs[key];
    }
  }

  return patch;
}

//判断两个节点的孩子节点差异并返回
function diffChildren(oldChildren,newChildren,patches) {
  oldChildren.forEach((child,idx)=>{
    //index每次传递给walk时，index时递增的，所有人都基于一个序号来实现
    walk(child,newChildren[idx],++Index,patches)
  })
}
//判断节点是否为文本字符串
function isString(node) {
  return Object.prototype.toString.call(node)==='[object String]';
}

//对比两个节点 叶子节点返回差异补丁 或 对树枝 的深度遍历 进入孩子节点的遍历，将补丁一直传递下去//若参数index被私有化到了walk作用域内
function walk(oldNode,newNode,index,patches) {
  let currentPatch=[];
  if(!newNode){//删除了节点
    currentPatch.push({type:REMOVE,Index})
  }
  if(isString(oldNode)&&isString(newNode)){ //文本节点

    if(oldNode!==newNode){
      currentPatch.push({type:TEXT,text:newNode});
    }
  }else if(oldNode.type===newNode.type){ //比较属性是否有更改
    let attrs=diffAttr(oldNode.props,newNode.props);//属性名的不同
    if(Object.keys(attrs).length>0){
      console.log(attrs)
      currentPatch.push({type:ATTRS,attrs})
    }
    if(oldNode.children){//若有则遍历儿子
      diffChildren(oldNode.children,newNode.children,patches);
    }
  }else{ //节点被替换
    currentPatch.push({type:REPLACE,newNode:newNode});
  }
  if(currentPatch.length>0){
    //当前元素确实有补丁，将元素和补丁对应起来 放到补丁包中、
    patches[Index]= currentPatch;
  }
  return patches;
}


export  { diff }