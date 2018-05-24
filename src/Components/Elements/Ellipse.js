import React,{ Component, Children } from 'react'
import Base from './base'
import isFun from '../utils/isFun'
import SVG from 'svg.js'

class Ellipse extends Base {
  
  initName() {
    this.instanceName = 'ellipse'
    return this.instanceName
  }

}

export default Ellipse
