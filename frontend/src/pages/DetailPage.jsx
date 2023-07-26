import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Nav from "../components/nav";


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
            <h1>detailPage</h1>

        </main>
        
        </>
     );
}
 
export default DetailPage;