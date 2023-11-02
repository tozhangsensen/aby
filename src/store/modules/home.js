import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
//导入网络请求
import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '@/services'
// 请求步骤2
// export const fetchHomeDataAction = createAsyncThunk(
//   "fetchdata",
//   async (payload) => {
//     console.log(payload)
//     //在这里发送网络请求
//     const res = await getHomeGoodPriceData()
//     return res //return改变状态
//   }
// )
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {  
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendInfoAction(res))
  })
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    // changeGoodPriceInfoAction(state, action)
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    // 请求步骤3
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      // 请求步骤4
      state.goodPriceInfo = payload
    },
  },
})

// export const { changeGoodPriceInfoAction } = homeSlice.actions //导出actionCreaters
export const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer //导出reducer给configureStore合并

// counterSlice.actions 是一个由 Redux Toolkit 的 createSlice 自动生成的对象，其中包含了根据 reducers 自动创建的 action creators。这个对象的结构在每个使用 createSlice 的地方都是相同的。所以，它的结构是固定的，你可以在不同的 slice 中使用相同的方式来访问这些 action creators。
