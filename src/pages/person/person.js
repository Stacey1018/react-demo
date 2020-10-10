import React, {Component} from 'react'
import { Button } from 'antd-mobile'
import './person.scss'
import {rejectUser} from '../../api/user'
class Person extends Component{
  render(){
    return(
      <div className="person">
        <div className="person-header">
          <img alt="头像" />
          <span>未登录</span>
        </div>
        <Button type="primary" onClick={this.rejectUser.bind(this)}>登录</Button>
        {/* <button onClick={this.updateObj.bind(this)}>ojb</button> */}

      </div>
    )
  }
   rejectUser() {
    rejectUser('zy','223344').then(value=>{
      console.log(value)
    })
  }

}
export default Person
