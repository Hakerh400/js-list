'use strict';

const fs = require('fs');
const path = require('path');
const O = require('omikron');
const List = require('./list');
const ListNode = require('./list-node');

class ArrayList extends List{
  length = 0;

  constructor(arr=null){
    super();

    if(arr !== null)
      for(const elem of arr)
        this.push(elem);
  }

  get len(){ return this.length; }

  unshift(elem){
    this.length++;
    super.unshift(new ListNode(this, elem));
  }

  push(elem){
    this.length++;
    super.push(new ListNode(this, elem));
  }

  shift(){
    this.length--;
    return super.shift().val;
  }

  pop(){
    this.length--;
    return super.pop().val;
  }

  *[Symbol.iterator](){
    let node = this.head;

    while(node !== null){
      yield node.val;
      node = node.next;
    }
  }
}

module.exports = ArrayList;