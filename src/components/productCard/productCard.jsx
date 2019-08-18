import React, { Component } from 'react'
import './productCard.css';


export default class productCard extends Component {
  render() {
    const {price,title,product} =this.props
    return (
      <div>
        <li> 
  <div className="productCard">
  <img src={require(`../../pic/${title}.jpg`)} alt={title} className="productCard__img"/>
<h2 className="productCard__headline"> {title} ${price} </h2>
  <div className="wrapperBtn">
 <div className="productCard__Btn add" onClick={(e)=>this.props.handleAddToBasket(e, product)}>Add</div>
  </div>
</div>
</li>
      </div>
    )
  }
}



