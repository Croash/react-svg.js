import React,{ Component, Children } from 'react'
import isFun from '../../utils/isFun'
import SVG from 'svg.js'

import animeLoad from '../../utils/animateLoad'
import attrLoad from '../../utils/attrLoad'

class Base extends Component {
  
  constructor(props) {
    super(props)
    const { __parent__, __instance__ } = props
    if (typeof window !== 'undefined') {
      if(__parent__!=undefined) {
        this.parent = __parent__
        this.initialInstance()
      }
      else console.error('__parent__ undefined')
    }
  }

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
        this[this.instanceName] = this.parent[this.instanceName]()
        this.initAttr()
        const events = this.exposeInstance(this.props)
        events && this.bindEvents(events)
        resolve(this[this.instanceName])
      })
    }

  }

  componentDidCatch(error, info) {
    return <div>{error} : {info}</div>
  }

  render() {
    return null
  }

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
    
    attrLoad(this[this.instanceName],initAttr)
    animeLoad(this[this.instanceName],initAnim)
  }

  bindEvents(events,mapInstance) {
    const list = Object.keys(events)
    let instance = this[this.instanceName]
    list.length && list.forEach((evName) => {
      instance
        .on(evName, (param) => {
          events[evName](param, instance)
        })
    })
  }

  exposeInstance() {
    if ('events' in this.props) {
      const events = this.props.events || {}
      if (isFun(events.created)) {
        console.log(`${this.instanceName} created`)
        events.created(this[this.instanceName],this.instanceName)
        delete events.created
      }
      return events
    }
    return false
  }

  componentDidMount() {
  }

}

export default Base
