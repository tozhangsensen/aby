import React, { memo } from "react"
import routes from "./router"
import { useRoutes } from "react-router-dom"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"

const App = memo(() => {
  return (
    <div className="app">
      {/*顶部*/}
      <AppHeader />
      {/* page内容 */}
      <div className="page">
        {useRoutes(routes)}
      </div>
      {/* 底部 */}
      <AppFooter />
    </div>
  )
})

export default App
