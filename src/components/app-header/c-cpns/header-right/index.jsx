import IconAvatar from "@/assets/svg/icon_avatar"
import IconGlobal from "@/assets/svg/icon_global"
import IconMenu from "@/assets/svg/icon_menu"
import React, { memo, useEffect, useState } from "react"
import { RightWrapper } from "./style"

const HeaderRight = memo(() => {
  /** 定义组件内部的状态 */
  const [showPanel, setShowPanel] = useState(false)

  /** 事件处理函数 */
  function profileClickHandle() {
    setShowPanel(true)
  }
  /** 副作用代码，当window被点击就会关闭弹窗 */
  // bug：点击触发了元素的开启弹窗事件，接着冒泡到window，window关闭窗口事件触发

  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener("click", windowHandleClick, true) //两种做法：让事件处于捕获阶段，或者取消冒泡的影响
    return () => {
      window.removeEventListener("click", windowHandleClick, true)
    }
  }, [])

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {/* 变量控制元素的显示与隐藏 */}
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
