import React,{ Component, Children } from 'react'
import Base from './base'
import isFun from '../utils/isFun'
import SVG from 'svg.js'

class Line extends Base {
  
  initName() {
    this.instanceName = 'line'
    return this.instanceName
  }

}

export default Line
