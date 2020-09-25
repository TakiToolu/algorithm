import {createElement,render,renderDom} from './element'
import { diff } from './diff'

let vertualDom=createElement('ul',{class:'list'},[
  createElement('li',{class:'item'},['a']),
  createElement('li',{class:'item'},['b']),
  createElement('li',{class:'item'},['c']),
])
let vertualDom2=createElement('ul',{class:'list'},[
  createElement('li',{class:'item'},['1']),
  createElement('li',{class:'item'},['2']),
  createElement('li',{class:'item'},['3']),
])
//将虚拟dom转化成了真实DOM渲染到页面上
let el=render(vertualDom);
renderDom(el,window.root);
console.log(vertualDom);
console.log(vertualDom2);
//Dom Diff比较两个虚拟dom区别 比较两个对象的区别
//dom diff 作用 根据两个虚拟对象创建出补丁包patch，描述改变的内容，将这个补丁用来更新dom
let patch=diff(vertualDom,vertualDom2);
console.log(patch);