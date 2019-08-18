import React,{ Component,Fragment} from 'react';
import {Switch, Route} from 'react-router-dom'
import Auth from './components/auth/auth';
import Basket from './components/basket/basket';
import ProductList from './containers/productList/productList';
import Header from './containers/header/header';
import Footer from './containers/footer/footer';
import Filter from "./components/filter/filter";
import "./App.css"
import products from './db.js';
class App extends Component{
constructor(props){
  super(props)
  this.state = { products: [], filteredProducts: [], basketItems: [],isDisplayed:false}
  this.handleChangeSort = this.handleChangeSort.bind(this)
  this.handleChangeCategory = this.handleChangeCategory.bind(this)
  this.handleAddToBasket = this.handleAddToBasket.bind(this)
  this.handleRemoveFromBasket = this.handleRemoveFromBasket.bind(this)
  this.handleChecked=this.handleChecked.bind(this)
  this.handleClearBasket=this.handleClearBasket.bind(this)
}
 componentWillMount(){  
  this.setState({ 
  "products": products,
  "filteredProducts": products
})
   if(localStorage.getItem("basket")){
     this.setState({"basketItems": JSON.parse(localStorage.getItem("basket"))})
    }
 
  }
  handleChangeSort(e){
   this.setState({sort: e.target.value});
   this.listProducts();
  }
  handleChangeCategory(e){
    this.setState({category: e.target.value});
    this.listProducts();
   }

  listProducts(){
this.setState(state => {
 if(state.sort !== ""){ 
   state.products.sort((a,b)=>(state.sort==="lowest")? (a.price >b.price ? 1 : -1 ):(a.price <b.price ? 1 : -1 ) )
 }else{
   state.products.sort((a,b)=>(a.id > b.id ? 1 : -1));
 }
if(state.category !== "" && state.category!==undefined){
  return {filteredProducts: this.state.products.filter(a=>
    a.category.indexOf(state.category)>=0)}
}
return {filteredProducts : this.state.products}
})
  }
  handleAddToBasket(e,product){
    this.setState(state=>{
      const basketItems = state.basketItems;
      let productInBasket = false;
      basketItems.forEach(item =>{
      if(item.id===product.id){
       productInBasket = true;
       item.count++
      }
      });
      if(!productInBasket){
        basketItems.push({...product, count: 1});
      }
      localStorage.setItem("basket", JSON.stringify(basketItems))
      return basketItems;    
    })
   }
   handleRemoveFromBasket(e,product){
    this.setState(state=>{
      const basketItems = state.basketItems.filter(item =>
        item.id!==product.id
      )
      localStorage.setItem("basket", JSON.stringify(basketItems))
      return {basketItems};    
      
    })}
    handleChecked(){
      this.setState(state =>{
         const isDisplayed = !state.isDisplayed
        return {isDisplayed} 
    })}
    handleClearBasket(){
      this.setState(()=>{
       return {basketItems: []}
      })
      localStorage.clear()
    }
  render(){
    return(

<Fragment>
  <Header handleChecked={this.handleChecked}
   isDisplayed={this.state.isDisplayed}/>
   <div className="wrapper">
  <Switch>
  <Route  path='/basket' render = {() => <Basket
   basketItems={this.state.basketItems}
   handleRemoveFromBasket={this.handleRemoveFromBasket}
   handleClearBasket={this.handleClearBasket}
   handleAddToBasket={this.handleAddToBasket}/>}/>
  <Route  path='/login' render = {()=> <Auth log = "Log In" /> } />
  <Route  path='/signup' render= {() => <Auth log = "Sign Up" />} />
  <Route exact path='/'  render= {() => 
  <div>
  <Filter category={this.state.category}
  sort={this.state.sort}
  handleChangeCategory={this.handleChangeCategory}
  handleChangeSort={this.handleChangeSort}/>
  <ProductList
   productList={this.state.filteredProducts}
   category={this.state.category}
    handleAddToBasket={this.handleAddToBasket}
 /></div>}/>
  </Switch>
  </div>
  <Footer />
</Fragment>
)}}
export default App