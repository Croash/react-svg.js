import React,{ Component, Children } from 'react'
import _ from 'lodash'
import SVG from 'svg.js'
import isFun from '../utils/isFun'

class Canvas extends Component {

  constructor(props) {
    super(props)
    const { divName = 'drawing' } = props
    this.state = {
      loaded: false
    }
  }

  render() {
    return(<div ref={ref=>{ this.ref=ref }}>
      { this.state.loaded? this.renderChildren(): null }
      </div>)
  }

  exposeInstance() {
    if ('events' in this.props) {
      const events = this.props.events || {}
      console.log(events)
      if (isFun(events.created)) {
        events.created(this.canvas)
        delete events.created
      }
      return events
    }
    return false
  }

  componentDidMount() {
    const { divName = 'drawing', size = { width : 500, height : 300 } } = this.props
    this.canvas = SVG(this.ref).size(size.width,size.height)
    this.setState({ loaded: true })
    const events = this.exposeInstance(this.props)
    // console.log(events)
  }

  componentDidUpdate() {
  }

  renderChildren() {
    const childrenWithProps = Children.map(this.props.children,
      (child) => {
        return child!=null?React.cloneElement(child, { 
          ..._.omit(this.props,[ 'children', 'events' ]),
          __canvas__: this.canvas,
          __parent__: this.canvas,
          __parent__type__: 'canvas'
        }):null
      }
    )
    return childrenWithProps
  }

}

export default Canvas
