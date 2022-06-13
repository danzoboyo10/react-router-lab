// ui components
import Nav from './components/Nav';
// page components
import Main from './pages/Main';
import Stocks from './pages/Stocks';
import About from './pages/About';
import Price from './pages/Price';
// component libraries
import { Route } from 'react-router-dom';



function App() {
  return (
    
    <div className="App">
       <Nav />
     <Route exact path="/">
       <Main />
     </Route>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/stocks">
       <Stocks />
     </Route>
     <Route path="/price/:symbol" render={(routerProps) => <Price {...routerProps} /> } >
     </Route>

    </div>

)}


export default App;
