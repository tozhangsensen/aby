import React, { memo } from "react"
import RoomItem from "@/components/room-item"
import { shallowEqual, useSelector } from "react-redux"
import { DetailWrapper } from "./style"
const detail = memo(() => {

  /** redux获取数据 */
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  )

  return (
    <DetailWrapper>
        {/* <img src={detailInfo?.picture_urls?.[0]} alt="" /> */}
        <div className="swiper">
        <div>房间详情</div>

          <RoomItem
            itemData={detailInfo}
            itemWidth="50%"
            key={detailInfo?.id}
            // itemClick={itemClickHandle}
          />
        </div>
    </DetailWrapper>
  )
})

export default detail
