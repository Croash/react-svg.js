import React,{ Component, Children } from 'react'
import _ from 'lodash'
import SVG from 'svg.js'
import isFun from '../utils/isFun'

class Group extends Component {

  constructor(props) {
    super(props)
    const { canvas, __parent__ } = props
    
    if(__parent__!=undefined) {
      this.Initialize()
    }
    
    else console.log('some thing wrong with this')
  }

  Initialize() {
    const { __parent__ } = this.props
    this.parent = __parent__
    this.group = this.parent['group']()
    this.instanceName = 'group'
    const events = this.exposeInstance(this.props)
    this.bindEvents(events)
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

  render() {
    return this.renderChildren()
  }

  renderChildren() {
    const childrenWithProps = Children.map(this.props.children,
      (child) => { 
        return child!=null ? React.cloneElement(child, { 
          ..._.omit(this.props,[ 'children', 'events' ]),
          __group__: this.group,
          __parent__: this.group,
          __parent__type__: 'group'
        }) : null
      } 
    )
    return childrenWithProps
  }

  componentWillReceiveProps() {
  }

  componentDidUpdate() {
  }

  componentDidCatch(error, info) {
    return <div>{error} : {info}</div>
  }

}

export default Group
