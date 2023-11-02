// zhangsensen@zhangsensendeMacBook-Pro aby % npm install @reduxjs/toolkit react-redux
import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailReducer from "./modules/detail"

// configureStore 中定义的 reducer 参数已经内部进行了 reducer 的合并，因此你不再需要显式使用 combineReducers 来合并这些 reducer。configureStore 是 Redux Toolkit 提供的便捷方法，它会自动执行合并操作，包括处理由 createSlice 创建的 reducer 和手动定义的 reducer。
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store
