import axios from "axios";
import { useState } from "react";





const AddProfile = ({}) => {
    const [adding, setAdding] = useState(false)

    const CreateProfile = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const response = await axios.post("/api/user/image", formData)

        e.target.reset()

    }

    return ( 
        <div>
            <button onClick={()=> setAdding(prev => !prev)}>Create Profile</button>
            <form onSubmit={CreateProfile} style={adding ? {display: "block"} : {display:"none"}}>
                <input type="text" placeholder="Email" name="email"/>
                <input type="text" placeholder="Name" name="name" />
                <input type="file" placeholder="image" name="image"/>
                <input type="text" placeholder="ADD TEXT" name="description" />
                <button>Publish</button>
            </form>
        </div>
     );
}
 
export default AddProfile;