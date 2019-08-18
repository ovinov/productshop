import React, { Component } from 'react'
import "./basket.css"

export default class Basket extends Component {
  render() {
    const {basketItems} = this.props;
    return (
      <div>
        {basketItems.length===0? <div><h1 className="basket__nope"> Sorry, but your basket is empty :(</h1></div>: 
          <div className="basket">
  <ul className="basket__list">
    {basketItems.map(item=>
       <li className="basket__list-item" ><h3 className="list-item__title">{item.title}</h3>
       <div className="list-item__x" onClick={(e)=>this.props.handleRemoveFromBasket(e,item)} > &#10006;</div>
        <div className="list-item__plus" onClick={(e)=>this.props.handleAddToBasket(e,item)} > &#10006; </div>
       <h2 className="list-item__counter">{item.price} X {item.count}  </h2>
       </li>  )}
     
  </ul>
  <div className="basket__bottom" onClick={()=> this.props.handleClearBasket()}>BUY</div>
  </div>
      }
      </div>
    )
  }
}
