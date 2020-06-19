'use strict';

const fs = require('fs');
const path = require('path');
const O = require('omikron');
const List = require('./list');
const ListNode = require('./list-node');

class ArrayList extends List{
  constructor(arr=null){
    super();

    if(arr !== null)
      for(const elem of arr)
        this.push(elem);
  }

  unshift(elem){ super.unshift(new ListNode(this, elem)); }
  push(elem){ super.push(new ListNode(this, elem)); }
  shift(){ return super.shift().val; }
  pop(){ return super.pop().val; }
}

module.exports = ArrayList;