import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './layout.scss'
import Record from '../record/record.js'
import Home from '../home/home.js'
import Person from '../person/person'
class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      test: {
        name: '',
      },
      arr: [],
      num: 0
    }
  }
  render() {
    return (
      <Router>
        <div className="routeContent">
          <Route path="/" exact component={Home} />
          <Route path="/person" component={Person} />
          <Route path="/record" exact component={Record} />
          
        </div>
        <div className="navBar">
          <div className="navbar">
            <Link  to="/">
              首页
            </Link>
          </div>
          <div className="navbar">
            <Link to="/find">发现</Link>
          </div>
          <div className="navbar">
            <Link to="/record">记录</Link>
          </div>
          <div className="navbar">
            <Link to="/person">个人中心</Link>
          </div>
        </div>
        <div>
        </div>
      </Router>
    )
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  inputChange = this.inputChange.bind(this)


}
export default Layout
