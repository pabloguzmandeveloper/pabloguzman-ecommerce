import { useState , useEffect } from "react";
import { collection , getDocs , deleteDoc , addDoc , removeDoc , doc } from "firebase/firestore";
import { dbComosano } from '../../firebaseConfig/firebase';

const Create = () => {
    const [description,setDescription]=useState("");
    const [stock,setStock]=useState(0);
    const navigate = useNavigate();

    const productsCollectionComosano = collection(dbComosano,"comosanoProductos");
    const store = async (e)=>{
        e.preventDefault();
        await addDoc (productsCollectionComosano, {
            description: description,
            stock: stock,
        })
        navigate("/")
    }
    return(
        <div>renderizar</div>
    )
};

const Delete = () => {


    // const deleteProduct = async () => {
    //     const ProductDoc = doc(dbComosanoFirestore,"comosanoProducts",id);
    //     await deleteDoc(ProductDoc)
    //     getProducts()
    // }
}