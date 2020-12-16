
import React, {Component} from 'react';
import './mystyles.css';
import { ProductList } from './components/ProductList';
import './App.css';

class App extends Component{
constructor(){
super();
this.state={products:[],
            searchValue:'' };
};
componentDidMount(){
  fetch('https://fir-project-5445f.web.app/products.json')
  .then(response=>response.json())
  .then(items=>this.setState({products:items}));
}
render(){
  const {products,searchValue}=this.state;
  const filteredProducts = products.filter(product=>product.name.toLowercase().includes(searchValue
    .toLowercase()));

return(
  <div className="App">
    <h1 className="shri-gopala-logo">shri Gopala Soaps</h1>
    <div>
      <input 
      type = 'search' 
      placeholder='search products'
      className='serach-bar'
      onChange={e=>{
        this.setState({searchValue:e.target.value});
      }}/>
    </div>
<ProductList products={filteredProducts}>

     </ProductList>
</div>
);
}
}
export default App;