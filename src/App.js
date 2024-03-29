import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import NegotiateBot from './screens/NegotiateBot';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container ">
            <header className="row">
                <div>
                    <a href="/" className="brand">Team Antrix</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
              <Route path="/product/:id/negotiate" component={NegotiateBot}></Route>
              <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/" component={HomeScreen} exact></Route>
            </main>
            <footer className="row center">
                All Rights Reserved
            </footer>
        </div>
        </BrowserRouter>  
  );
}

export default App;
