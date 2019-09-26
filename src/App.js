import React, {Component} from 'react';
import List from './Componenents/List'
import ItemForm from './Componenents/Form';

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

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (item) => {
    const { myList } = this.state;
    const myItem = {id: this.getUniqId(), name: myItem, complete: false}
    this.setState({myList: [...myList, myItem] })
  }

  render() {
    const { myList } = this.state
    return(
      <div>
        <List myList={ myList } pickUp={ () => this.handleChecked}/>
        <p></p>
        <ItemForm addMyList={this.addItem} />
      </div>
    )
  }
}

export default App;
