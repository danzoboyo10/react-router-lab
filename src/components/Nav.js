
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div>iStocks</div>
            </Link>
        
            <Link to="/stocks">
                <div>STOCKS</div>
            </Link>
            <Link to="/about">
                <div>ABOUT</div>
            </Link>
        </nav>
    );
};

export default Nav;