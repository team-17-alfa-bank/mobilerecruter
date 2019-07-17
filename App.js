import React, {Component} from 'react';
import Header from 'C:/Users/HP/Desktop/FirstProject/src/components/uikit/Header';

const url = 'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json'

export default class App extends Component {
  state = {
      title: 'Header'
  }

  componentDidMount = async () => {
    const response = await fetch(url)
    // const data = await response.json()
    console.log(response)
  }

  render() {
    return (
      <Header title={this.state.title} />
    )
  }
}
