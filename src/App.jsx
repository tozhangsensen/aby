import React, { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">header</div>

      <div className="page">
        {/* 在这里配置路由 */}
        {useRoutes(routes)}
        content
      </div>

      <div className="footer">footer</div>
    </div>
  )
})

export default App
