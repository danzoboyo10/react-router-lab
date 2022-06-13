import { Link } from 'react-router-dom';
import stocks from '../Data';

const Stocks = (props) => {
    


    return (
        <div className="stocks">
            {stocks.map((stock, index) => {
                const { name, symbol } = stock;
                return (
                    <Link key={index} to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                )
            })}
        </div>
    );
};

export default Stocks;