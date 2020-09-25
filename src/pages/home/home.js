import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
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

      <>
        <TabBar>
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<div className="commonIcon iconHome" />
            }
            selectedIcon={<div className="commonIcon iconHomeSelect" />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            title="发现"
            key="faxian"
            icon={<div className="commonIcon iconFaxian" />
            }
            selectedIcon={<div className="commonIcon iconFaxianSelect" />
            }
            // selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            key="person"
            icon={<div className="commonIcon iconPerson" />
            }
            selectedIcon={<div className="commonIcon iconPersonSelect" />
            }
            // selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </>
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
