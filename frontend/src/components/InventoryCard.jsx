import { NavLink } from "react-router-dom";


const InventoryCard = ({title, room, image, description, id, onDelete}) => {
    return ( 
        <section>
            <article>
                <img src={image} alt={title} />
            </article>
            <article>
                <h3>{title}</h3>
                <p>{room}</p>
                <h4>Beschreibung</h4>
                <p>{description}</p>
                <NavLink to={`/detailPage/${id}`}>Edit</NavLink>
                <button onClick={() => onDelete(id)}>Delete</button>
            </article>
        </section>
     );
}
 
export default InventoryCard;