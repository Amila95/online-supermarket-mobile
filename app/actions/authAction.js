import axios from 'react-native-axios';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS,SET_CURRENT_USER } from './types';
import jwt_decode from 'jwt-decode';
import { AsyncStorage } from "react-native";

//Register User
export const registerUser = (userData,history) => dispatch =>{
    axios.post('http://192.168.1.102:9000/api/users/register', userData)
    .then(res=> history.push('/login'))
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

//Login User
export const loginUser = userData => dispatch =>{
    axios.post('/api/users/login', userData)
    .then(res =>{
        //save to localStorage
        // console.log(res.data);
        const {token} = res.data;
        //Set token Ls
//   setAuthToken(AsyncStorage .jwtToken);
// AsyncStorage.setItem("userDetails", info.username);
        AsyncStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token); 
        //decode token to get user data
        const decode = jwt_decode(token);
        //set current user
        dispatch(setCurrentUser(decode));
    })
    .catch(err =>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

//Set logged in user
export const setCurrentUser =(decoded) =>{
    console.log("aaaaa");
    return{
        
        type: SET_CURRENT_USER,
        payload:decoded
    }
}

// //Set payment
// export const setPayment =() =>{
//     return{
//         type: SET_PAYMENT,
//     }
// }

//Log user out
export const logoutUser = ()=> dispatch =>{
    AsyncStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}