import { combineReducers } from 'redux'
import locationReducer from './location'
import globals from './globals'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    globals: globals,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
