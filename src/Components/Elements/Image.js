import React,{ Component, Children } from 'react'
import Base from './base'
import isFun from '../utils/isFun'
import SVG from 'svg.js'

class Image extends Base {
  
  initName() {
    this.instanceName = 'image'
    return this.instanceName
  }

}

export default Image
