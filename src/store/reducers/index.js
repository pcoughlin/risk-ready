import { combineReducers } from 'redux'
import { auth } from './authReducer'
import { modals } from './modalReducer'
import { upload } from './uploadReducer'

export const rootReducer = combineReducers({ auth, modals, upload })
