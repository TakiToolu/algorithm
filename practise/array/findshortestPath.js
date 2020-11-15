/**
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：
 每次转换只能改变一个字母。转换过程中的中间单词必须是字典中的单词。
 说明:
 如果不存在这样的转换序列，返回 0。
 所有单词具有相同的长度。
 所有单词只由小写字母组成。
 字典中不存在重复的单词。
 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 *
 * 广度优先遍历，队列存储，
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet=new Set(wordList);
  let canConverse=function(s1,s2){
    let count=0;
    for(let i=0;i<s1.length;i++){
      if(s1[i]!==s2[i]){
        count++;
      }
      if(count>1)break;
    }
    return count===1;
  }
  let queue=[];
  queue.push([beginWord,1]);
  while(queue.length){
    let [word,level]=queue.shift();
    if(word==endWord)return level;
    for(let item of wordSet){
      if(canConverse(word,item)){
        queue.push([item,level+1]);
        wordSet.delete(item);
      }
    }
  }
  return 0;
};