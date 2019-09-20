import React from 'react';

const Item = ({ id, item, price, grabed, pickUp }) => (
  <tr>
    <td>{item}</td>
    <td>{price}</td>
    <td><input id={id} type="checkbox" checked={grabed} onChange={pickUp()} /></td>
  </tr>
)

export default Item;