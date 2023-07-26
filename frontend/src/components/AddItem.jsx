import axios from "axios";
import { useState } from "react";




const AddItem = ({category, setRefresh}) => {
    const [adding, setAdding] = useState(false)

    const CreateItem = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        formData.set("category", category)

        const response = await axios.post("/api/inventar/image", formData)
        setRefresh(prev => !prev)

        e.target.reset()
    }

    return ( 
        <div>
            <button onClick={()=> setAdding(prev => !prev)}>Add New Item</button>
            <form onSubmit={CreateItem} style={adding ? {display: "block"} : {display:"none"}}>
                <input type="text" placeholder="TITLE" name="title"/>
                <input type="text" placeholder="ROOM" name="room" />
                <input type="file" placeholder="IMAGE" name="image"/>
                <input type="text" placeholder="ADD TEXT" name="description" />
                <button>Publish</button>
            </form>
        </div>
     );
}
 
export default AddItem;