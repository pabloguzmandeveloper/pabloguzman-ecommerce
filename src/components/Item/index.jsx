import { imagesMap } from '../../images/imagesMap.js'
import './index.css';
import { Link } from "react-router-dom";

// HIJO 1-2
export const Item = ({product}) => {
    return (
        <>
            <Link to={`/item/${product.id}`}>
                <div>
                    <h4>{product.name}</h4>                    
                    <p>Desde ${product.price}</p>
                    <img className="img-item" src={imagesMap[product.categ]} alt={product.categ} />
                </div> 
            </Link>
        </>
    )
};