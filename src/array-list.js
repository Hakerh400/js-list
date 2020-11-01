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
    super.unshift(new ListNode(this, elem));
    this.length++;
  }

  push(elem){
    super.push(new ListNode(this, elem));
    this.length++;
  }

  shift(){
    return super.shift().val;
    this.length--;
  }

  pop(){
    return super.pop().val;
    this.length--;
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