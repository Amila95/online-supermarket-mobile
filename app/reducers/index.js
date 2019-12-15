import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import errorReducer from './errorReducer';
import CartReducer from './CartReducer'

export default combineReducers({
    auth: AuthReducer,
    errors:errorReducer,
    cart: CartReducer
})