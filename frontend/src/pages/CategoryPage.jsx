import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

import AddItem from "../components/AddItem";
import InventoryCard from "../components/InventoryCard";
import Nav from "../components/Nav";

const CategoryPage = () => {

    const [inventory ,setInventory] = useState ([])
    const [refresh, setRefresh] = useState (true)
    const params = useParams()

    useEffect(() => {
        const getInventar = async () => {
            const response = await axios.get("/api/inventar")
            setInventory(response.data)
        }
        getInventar()
    },[refresh])

    const deleteItem = async (itemId) => {
        try {
            const {data} = await axios.delete(`/api/inventar/${itemId}`)
            setRefresh(prev => !prev)
        } catch(err) {
            console.log(err);
        }
    }

    const filterInventory = inventory.filter((item) => 
    item.category === params.category)
    return ( 
        <>
        <header>
            <Nav />
        </header>
        <main>
                <section>
    
                    <AddItem setRefresh={setRefresh} category={params.category}/>     
                </section>
            <section>
                {filterInventory?.map((el) => 
                <InventoryCard key={el._id}
                id={el._id}
                image={el.image.url} 
                title={el.title} 
                room={el.room} 
                description={el.description}
                onDelete={() => deleteItem(el._id)} /> )}
        
            </section>

        </main>
        </>

     );
}
 
export default CategoryPage;
