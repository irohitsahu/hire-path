
// react-router-dom components
import { useNavigate } from "react-router-dom";


import { RemoveCookie } from './UserAuth';

const Logout = () => {

    const navigate = useNavigate()
    RemoveCookie('usrin');
    navigate('/')


}



export default Logout;
