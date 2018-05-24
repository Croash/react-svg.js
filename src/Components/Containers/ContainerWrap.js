import React,{ Component, Children } from 'react'
import _ from 'lodash'
import SVG from 'svg.js'

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
  }

  render() {
    return this.renderChildren()
  }

  renderChildren() {
    const childrenWithProps = Children.map(this.props.children,
      (child) => { 
        return child!=null ? React.cloneElement(child, { 
          ..._.omit(this.props,[ 'children' ]),
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
