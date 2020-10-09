import React, {Component} from 'react'
import './person.scss'
class Person extends Component{
  render(){
    return(
      <div className="person">
        <div className="person-header">
          <img alt="头像" />
          <span>未登录</span>
        </div>
      </div>
    )
  }
}
export default Person
