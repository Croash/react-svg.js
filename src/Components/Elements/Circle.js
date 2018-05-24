import React,{ Component, Children } from 'react'
import Base from './base'
import isFun from '../utils/isFun'
import SVG from 'svg.js'

class Circle extends Base {
  
  initName() {
    this.instanceName = 'circle'
    return this.instanceName
  }

}

export default Circle
