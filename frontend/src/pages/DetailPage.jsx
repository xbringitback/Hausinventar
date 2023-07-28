import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Nav from "../components/Nav";
import DetailCard from "../components/DetailCard";


const DetailPage = () => {
    const [inventoryItem, setInventoryItem] = useState([])
    const params = useParams();
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        const getInventoryItem = async () => {
            const response = await axios.get(`/api/inventar/${params.id}`)
            setInventoryItem(response.data)
        }
        getInventoryItem()
    }, [refresh])

    return ( 
        <>
        <header>
            <Nav/>
        </header>
        <main>
            <section>
                <DetailCard id={inventoryItem._id} title={inventoryItem.title} room={inventoryItem.room} image={inventoryItem.image?.url} description={inventoryItem.description} setRefresh={setRefresh}/>
            </section>
        </main>
        
        </>
     );
}
 
export default DetailPage;