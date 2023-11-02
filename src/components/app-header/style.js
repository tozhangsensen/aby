import styled from "styled-components"


// export const HeaderWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   height: 80px;
//   border-bottom: 1px solid #eee;
// `

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff; /* 添加一个背景色以确保 header 显示出来 */
  z-index: 999; /* 设置一个高的 z-index 值，以确保 header 处于最顶层 */
`