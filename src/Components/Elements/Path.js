import React,{ Component, Children } from 'react'
import Base from './base'
import isFun from '../utils/isFun'
import SVG from 'svg.js'

class Path extends Base {
  
  initName() {
    this.instanceName = 'path'
    return this.instanceName
  }

}

export default Path
