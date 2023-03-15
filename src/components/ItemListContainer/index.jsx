import { ItemCollectionI } from "../ItemCollectionI";
import './index.css';

export const ItemListContainer = ()=>{
    return(
        <ItemCollectionI style={{color: "orange",
        background: "green",
        textAlign: "center",
        fontSize: "18px"}} greeting={"Hola!!! buenos días!! Bienvenido a nuestro E-CommerceSano!!"} />
    )
};