import styled from "styled-components";
//使用图片方法一
// import coverImg from "@/assets/img/cover_01.jpeg"
//src = {coverImg}
//css （style.js）中，url(${coverImg})
//使用图片方法二
//require包裹图片路径

export const BannerWrapper = styled.div`
  height: 529px;
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
  /* react动态引入图片不能url（"路径"）！！！，原因是打包会当成字符串*/
  /* background: url(${require("@/assets/img/cover_01.jpeg").default}) center/cover; */

`
