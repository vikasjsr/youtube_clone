import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
// ...

const store = configureStore({
  reducer: {
    app:appSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export default store;