import { createSlice } from '@reduxjs/toolkit'


export interface ThemeMode {
    theme: "light" | "dark";
  }

  const initialState: ThemeMode = {
    theme:"light"
  }


  export const themeModeSlice = createSlice({
    name: 'toggleThemeMode',
    initialState,
    reducers: {
   setMode:(state,action)=>{
    state.theme=action.payload
   }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setMode } = themeModeSlice.actions
  
  export default themeModeSlice.reducer