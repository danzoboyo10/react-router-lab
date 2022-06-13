import stocks from '../Data';

const Price = (props) => {


    const getStock = props.match.params.symbol;
    console.log(getStock);

    const matchStock = stocks.map((stock, index)=> {
        
        if (getStock === stock.symbol) {
            console.log(stock);
            
            return (<div>Name: {stock.name} Price: {stock.open}</div>); 
        }
   })

  return (
    <div> {matchStock} </div>  
  )
}

export default Price;
