import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom" //导入router
import { Provider } from "react-redux"

import App from "@/App"
import "normalize.css"
import "./assets/css/index.less"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* 配合异步组件使用 */}
    <Suspense fallback={<div>loading动画...</div>}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
)

//映射解决
// @ => src: webpack
// 问题: react脚手架隐藏webpack
// 解决一: npm run eject
// 解决二: craco => create-react-app config
