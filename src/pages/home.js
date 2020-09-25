import React, {Component} from 'react'
import Child from './child'
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      test:{
        name:'',
      },
      arr:[],
      num:0
    }

  }
  render(){
    return(
      
      <> 这是主页
        <input value={this.state.inputValue} onChange={this.inputChange} />
        <Child num={this.state.num} arr={this.state.arr} test={this.state.test}/>
        <button onClick={()=>{this.setState({ num: ++this.state.num})}}>更新</button>
        <button onClick={this.updateArr.bind(this)}>arr</button>
        <button onClick={this.updateObj.bind(this)}>ojb</button>
      </>
    )
  }

  inputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  inputChange = this.inputChange.bind(this)

  // updateArr(e){
  //   this.state.arr.push(Math.random())
  //   this.setState({
  //     arr:this.state.arr
  //   })
  //   console.log(this.state.arr)

  // }
  updateArr(e){
    this.setState({
      arr:this.state.arr.concat(Math.random())
    })

  }

  // updateObj(e){
  //   this.state.test.name = `${Math.random()}`
  //   this.setState({
  //     test:this.state.test
  //   })
  // }

  updateObj(e){
    let temp = {
      name:'aaa'
    }
    this.setState({
      test:temp
    })
  }
}
export default Home
