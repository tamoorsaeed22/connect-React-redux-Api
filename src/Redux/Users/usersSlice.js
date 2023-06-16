import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk("users/getData", async (arg, {rejectWithValue})=>{
    try{
        const data =  await (await fetch('https://randomuser.me/api/?results=5')).json();
        return data
    }catch(error){
        rejectWithValue(error)
    }
})
const initialState = { 
    users: [],
    isLoading: false,
    error: undefined,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
          state.isLoading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.results;
    })
    .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
  }
})

export const { increment, decrement, incrementByAmount } = usersSlice.actions
export default usersSlice.reducer