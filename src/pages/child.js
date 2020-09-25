import React, {Component} from 'react'
import {isEqual} from 'lodash'
class Child extends Component{
  componentDidMount(){
    console.log('componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate')
    console.log(JSON.stringify(nextProps))
    if (this.props.num !== nextProps.num) {
      return true;
    }
    if (!isEqual(this.props.arr,nextProps.arr)) {
      return true;
    }
    if (!isEqual(this.props.test,nextProps.test)) {
      return true;
    }
    return false;
  }
  render(){
    
    console.log('child',JSON.stringify(this.props))
    return(
      <div> 这是child
        {this.props.num}<br/>
        {this.props.arr.map(t=>t)}<br/>
        {JSON.stringify(this.props.test)}<br/>
      </div>
    )
  }
}
export default Child
