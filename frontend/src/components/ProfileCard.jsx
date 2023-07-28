import { NavLink } from "react-router-dom";

const ProfileCard = ({id, name, email, description, image, onDelete}) => {
    return ( 
        <>
        <div>
             <img className="ProfileImg" src={image} alt={name} />
        </div>
        <div>
            <h3 className="ProfileName">{name}</h3>
            <p className="ProfileEmail">{email}</p>
            <h4 className="ProfileContent">About me:</h4>
            <p className="ProfileDescription">{description}</p>
            <div className="btnDiv">
                <button className="Btn" onClick={() => onDelete(id)}>DELETE</button>
            </div>
        </div>
        </>
     );
}
 
export default ProfileCard;