// RTK的方式
// entire使用原始方式
import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: "home",
  initialState: {
    productList: []
  },
  reducers: {

  }
})

export default homeSlice.reducer
