import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './reducers'

const initialState = {}

const middleware = [thunk]

const store = createStore(
    initialState,
    rootReducers,
    //composeWithDevTools(applyMiddleware(...middleware))
)

export default store
