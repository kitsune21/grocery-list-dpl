import React, {Component} from 'react';
import List from './Componenents/List'

class App extends Component {

  state = {
    myList: [
      {id: 1, item: 'Milk',       price: 2.4,  grabed: true, },
      {id: 2, item: 'Bread',      price: 1.3,  grabed: false, },
      {id: 3, item: 'Ice Cream',  price: 4.2,  grabed: false, },
    ]
  }

  handleChecked = (event) => {
    const id = parseInt(event.target.id)
    const { myList } = this.state;
    this.setState({
      myList: myList.map( item => {
        if (item.id === id) {
          return {
            ...item,
            grabed: !item.grabed
          }
        }
        return item
      })
    })
  }

  render() {
    const { myList } = this.state
    return(
      <div>
        <List myList={ myList } pickUp={ () => this.handleChecked}/>
        <p></p>
      </div>
    )
  }
}

export default App;
