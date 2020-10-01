import {createElement,render,renderDom} from './element'
import { diff } from './diff'
import {patch} from './patch'

let vertualDom=createElement('ul',{class:'list'},[
  createElement('li',{class:'item'},['a']),
  createElement('li',{class:'item'},['b']),
  createElement('li',{class:'item'},['c']),
])
let vertualDom2=createElement('ul',{class:'list'},[
  createElement('li',{class:'item'},['1']),
  createElement('li',{class:'item'},['2']),
  createElement('div',{class:' '},['3']),
])
//将虚拟dom转化成了真实DOM渲染到页面上
//问题：若评级元素有互换 会导致重新渲染 ，新增节点不会被更新
let el=render(vertualDom);
renderDom(el,window.root);
let patches=diff(vertualDom,vertualDom2);
patch(el,patches)
renderDom(el,window.root);

//Dom Diff比较两个虚拟dom区别 比较两个对象的区别
//dom diff 作用 根据两个虚拟对象创建出补丁包patch，描述改变的内容，将这个补丁用来更新dom
// console.log(patches);