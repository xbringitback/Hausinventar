import axios from "axios";
import {useState} from "react"


const DetailCard = ({id, title, room, image, description, setRefresh}) => {
    const [titleInput, setTitleInput] = useState(true)
    const [roomInput, setRoomInput] = useState(true)
    const [imageInput, setImageInput] = useState(true)
    const [descriptionInput, setDescriptionInput] = useState(true)

    const updateInventory = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const response = await axios.put (`/api/inventar/${id}`, formData)
        setTitleInput(true)
        setRoomInput(true)
        setImageInput(true)
        setDescriptionInput(true)
        setRefresh(prev => !prev)

        e.target.reset()
    }

    return ( 
        <>
        {id?
            <div>
            <form onSubmit={updateInventory}>
                <div>
                    <label className={setImageInput?"":"hideMe"} htmlFor="image"> <img src={image} alt={title} /></label>
                    <input type="file" name="image" className={imageInput?"hideMe imageBlock":" imageBlock"} placeholder={image} id="image"/>
                    <button onClick={() => {setImageInput(prev => !prev)}}>Edit</button>                    
                </div>
                <div>
                    <label className={setTitleInput?"":"hideMe"} htmlFor="title"><h3>{title}</h3></label>
                    <input type="text" name="title" className={titleInput?"hideMe titleBlock":" titleBlock"} placeholder="Title"id="title" defaultValue={title} />
                    <button onClick={() => {setTitleInput(prev => !prev)}}>Edit</button>                    
                </div>
                <div>
                    <label className={setRoomInput?"":"hideMe"} htmlFor="room"><h3>{room}</h3></label>
                    <input type="text" name="room" className={roomInput?"hideMe roomBlock":" roomBlock"} placeholder="Room" id="room" defaultValue={room}/>
                    <button onClick={() => {setRoomInput(prev => !prev)}}>Edit</button>                    
                </div>
                <div>
                    <h2>Beschreibung:</h2>
                    <label className={setDescriptionInput?"":"hideMe"} htmlFor="description"><h3>{description}</h3></label>
                    <input type="text" name="description" className={descriptionInput?"hideMe descriptionBlock":" descriptionBlock"} placeholder="Description" id="description" defaultValue={description}/>
                    <button onClick={() => {setDescriptionInput(prev => !prev)}}>Edit</button>                    
                </div>
            </form>
        </div>:<></>
        }
        </>
     );
}
 
export default DetailCard;