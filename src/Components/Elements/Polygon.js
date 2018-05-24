import React,{ Component, Children } from 'react'
import Base from './base'
import isFun from '../utils/isFun'
import SVG from 'svg.js'

class Polygon extends Base {
  
  initName() {
    this.instanceName = 'polygon'
    return this.instanceName
  }

}

export default Polygon
