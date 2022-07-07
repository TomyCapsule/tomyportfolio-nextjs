import { configureStore } from '@reduxjs/toolkit'
import navbarStateReducer from '../features/navbar/navbarSlice'
import navigationStateReducer from '../features/navigation/navigationSlice';

export default configureStore({
  reducer: {
      navbarState: navbarStateReducer,
      navigationState: navigationStateReducer
  },
})