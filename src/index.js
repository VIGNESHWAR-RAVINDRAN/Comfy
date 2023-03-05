import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
//dev-lecft8h47ud22a0l.us.auth0.com(Domain)
//bJAXpFgcwL1JJOdqapfD8gsWWh74Je62
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);

ReactDOM.render(
  <Auth0Provider
    domain='dev-lecft8h47ud22a0l.us.auth0.com'
    clientId='bJAXpFgcwL1JJOdqapfD8gsWWh74Je62'
    authorizationParams={{
      redirect_uri: window.location.origin,
      cacheLocation:'Localstorage'
    }}>
  <UserProvider>

  
 <ProductsProvider>
   <FilterProvider>
    <CartProvider>
    <App/>
    </CartProvider>
   
   </FilterProvider>
    
 </ProductsProvider>
 </UserProvider>
 </Auth0Provider>,
   document.getElementById('root') 
)
