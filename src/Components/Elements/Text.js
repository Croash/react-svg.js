import React,{ Component, Children } from 'react'
import Base from './base'
import isFun from '../utils/isFun'
import SVG from 'svg.js'

class Rect extends Base {
  
  initialInstance() {
    const { __parent__, __parent__type__, __canvas__: canvas } = this.props
    this.instanceName = this.initName()
        
    if(this.props.__instance__!=undefined)
      this[this.instanceName] = this.props.__instance__
    if (this[this.instanceName]) {
      return new Promise((resolve) => {
        resolve(this[this.instanceName])
      })
    } else {
      return new Promise((resolve) => {
        this[this.instanceName] = this.parent[this.instanceName]('')
        this.initAttr()
        const events = this.exposeInstance(this.props)
        events && this.bindEvents(events)
        resolve(this[this.instanceName])
      })
    }

  }

  initName() {
    this.instanceName = 'text'
    return this.instanceName
  }

}

export default Rect
