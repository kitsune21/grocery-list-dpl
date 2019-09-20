import React from 'react';
import Item from './Item';

const List = ({ myList, pickUp }) => (
  <div>
    <table>
      <tbody>
        {
          myList.map( item => <Item key={item.id} {...item} pickUp={pickUp}/> )
        }
      </tbody>
    </table>
  </div>
)

export default List;