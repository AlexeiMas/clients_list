import {combineReducers} from 'redux'

import clients from './clients';
import search from './search';
import selectedContact from './selectedContact';


export default combineReducers({
    clients,
    search,
    selectedContact
})