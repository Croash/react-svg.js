import React,{ Component, Children } from 'react'
import Base from './base'
import SVG from 'svg.js'

import animeLoad from '../../utils/animateLoad'
import attrLoad from '../../utils/attrLoad'

class wrap extends Base {
  initName() {
    this.instanceName = 'rect'
    return this.instanceName
  }

  initAttr() {
    const defAttr = { width : 400, height : 200, fill : 'red' }
    const defAnim = {
      config: { time:3000, easing:'<', delay: 100 }, 
      situation:{ during:()=>{ }, loop:[ 1, false ], delay:100, after:()=>{} }
    }
    const { initConfig : { initAttr=defAttr, initAnim = defAnim } } = this.props
    
    attrLoad( this[this.instanceName],initAttr )                                                                                                          
    animeLoad(this[this.instanceName],initAnim)
  }
}

export default wrap
