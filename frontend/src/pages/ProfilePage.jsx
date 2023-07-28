import Nav from "../components/Nav";
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import ProfileCard from "../components/ProfileCard";
import AddProfile from "../components/AddProfile";
// import EditProfile from "../components/EditProfile";

const ProfilPage = () => {

    const params = useParams()
    const [refresh, setRefresh] = useState(true)
    const [userProfile, setUserProfile] = useState([])

    // GET DATA
    useEffect(()=>{
        const getUser = async () => {
            const response = await axios.get(`/api/user/${params.id}`)
            setUserProfile(response.data)
        }
        getUser()
    }, [refresh])

    // DELETE USER
    const deleteUser = async (userId) => {
        try {
            const {data} = await axios.delete(`/api/user/${userId}`)
            setRefresh(prev => !prev)
        } catch (error) {
            console.log(error)
        }
    }

    // BACK BTN
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }

    return ( 
        <>
            <Nav/>
            <main className="main-wrapper">
                <button className="BackBtn" onClick={goBack}>BACK</button>

                <h2>Profile Page</h2>
                <AddProfile />
                <ProfileCard
                    id={userProfile._id}
                    image={userProfile.image?.url}
                    name={userProfile.name}
                    email={userProfile.email}
                    description={userProfile.description}
                    setRefresh={setRefresh}
                    onDelete={()=> deleteUser(userProfile._id)}
                />
            </main>
        </>
     );
}
 
export default ProfilPage;