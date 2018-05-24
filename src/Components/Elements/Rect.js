import React,{ Component, Children } from 'react'
import Base from './base'
import isFun from '../utils/isFun'
import SVG from 'svg.js'

class Rect extends Base {
  
  initName() {
    this.instanceName = 'rect'
    return this.instanceName
  }

}

export default Rect
