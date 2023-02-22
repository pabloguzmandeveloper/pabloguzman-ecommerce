import bebidas from "../../images/bebidas.jpg";
import frutas from "../../images/frutas.jpg";
import golosinas from "../../images/golosinas.jpg";
import harinas from "../../images/harinas.jpg";
import quesos from "../../images/quesos.jpg";
import salsas from "../../images/salsas.jpg";
import varios from "../../images/varios.jpg";
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
                    <img className="img-item" src={`${product.categ}`} alt={product.categ} />
                </div> 
            </Link>
        </>
    )
};