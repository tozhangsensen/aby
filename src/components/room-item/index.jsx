import PropTypes from "prop-types"
import React, { memo, useRef } from "react"

import { Rating } from "@mui/material"
import { ItemWrapper } from "./style"
import { Carousel } from "antd"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick} = props
  const sliderRef = useRef()
  /** 事件处理的逻辑 */
  function controlClickHandle(isNext = true, event) {
    console.log(1)
    // 上一个面板/下一个面板
    isNext ? sliderRef.current.next() : sliderRef.current.prev()

    // // 最新的索引
    // let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    // const length = itemData.picture_urls.length
    // if (newIndex < 0) newIndex = length - 1
    // if (newIndex > length - 1) newIndex = 0
    // setSelectIndex(newIndex)

    // // 阻止事件冒泡
    event.stopPropagation()
  }
  function itemClickHandle() {
    // console.log(itemData);
    //因为roomitem复用的比较多，不能在内部跳转，否则用到它的地方都会跳
    //从外部接收
    if (itemClick) itemClick(itemData)
  }
  /** 条件判断显示哪个区域*/
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>

      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        {/* <div className="slider">
          <div className="control">
            <div className="btn left" onClick={(e) => controlClickHandle(false, e)} >
              <IconArrowLeft width="30" height="30" />
            </div>
            <div className="btn right" onClick={(e) => controlClickHandle(true, e)} >
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <Carousel ref={sliderRef} dots={false}>
            {itemData?.picture_urls?.map((item) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              )
            })}
          </Carousel>
        </div> */}
        {!itemData.picture_urls ? pictureElement : sliderElement}

        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
}

export default RoomItem