// export function isEmptyO(obj) {
//   return !!Object.keys(obj).length
// }
export function isEmptyO(obj) {
  // 属性数量为 大于 0 ，则返回 true，否则返回 false
  return Object.keys(obj).length > 0;
}