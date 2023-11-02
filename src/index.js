// 第三方文件
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components" //自定义主题文件，通过stylecomponent提供给外部（</ThemeProvider>）
//自己写的
import App from "@/App"
import "normalize.css"
import "antd/dist/antd.less"
import "./assets/css/index.less"
import store from "./store"
import theme from './assets/theme' //自定义主题文件，通过stylecomponent提供给外部（</ThemeProvider>），比如在header-center组件使用


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode> 
    <Suspense fallback={<div>loading动画...</div>}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
)


//React.StrictMode 严格模式
//Suspense,配合异步组件使用，必须的
//Provider 使用react-redux
// ThemeProvider 使用styled-components


//解决@映射解决
// @ => src: webpack
// 问题: react脚手架隐藏webpack
// 解决一: npm run eject（不推荐）
// 解决二: craco => create-react-app config
