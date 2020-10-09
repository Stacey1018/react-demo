import React, { Component} from 'react'
import './home.scss'
class Home extends Component {
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
      <div>home</div>
     
    )
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  inputChange = this.inputChange.bind(this)


}
export default Home
