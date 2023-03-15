import { imagesMap } from '../../images/imagesMap.js'
import './index.css';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

// HIJO 1-2
export const Item = ({product}) => {
    return (
        <Card>
            <Link to={`/item/${product.id}`}>
                <div>
                    <h4>{product.name}</h4>                    
                    <p>Desde ${product.price}</p>
                    <Card.Img className="img-item" src={imagesMap[product.categ]} alt={product.categ} />
                </div> 
            </Link>
        </Card>
    )
};