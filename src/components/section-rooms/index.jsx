import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item' //子组件
import { RoomsWrapper } from './style'//样式

const SectionRooms = memo((props) => {
  const { roomList = [],itemWidth } = props

  return (
    <RoomsWrapper>
      {
        roomList.slice(0, 8)?.map(item => {
          return <RoomItem itemWidth={itemWidth} itemData={item} key={item.id}  />
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms