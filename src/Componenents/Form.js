import React, { Component } from 'react';
import List from './List';

class ItemForm extends Component {

 state = { item: '' }
 handleChange = (e) => {
   const { name, value } = e.target
   this.setState({ [name]: value })
 }
 handleSubmit = (e) => {
   e.preventDefault()
   this.props.addMyList(this.state.item)
   this.setState({ item: '' })
 }
 render() {
   const { item } = this.state
   return (
     <form onSubmit={() => this.handleSubmit}>
       <input
         onChange={this.handleChange}
         required
         placeholder='add a food item'
         name='item'
         value={item}
       />
     </form>
   )
 }
}
export default ItemForm;