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
// 还要导出函数（本质返回的是action对象）给外部dispatch
export default homeSlice.reducer
