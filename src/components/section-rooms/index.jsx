import React, { memo } from 'react';
import { SectionRoomsWapper } from './style';
import RoomItem from '../room-item';

const SectionRooms = memo(porps => {
  const { roomList = [] } = porps;
  return (
    <SectionRoomsWapper>
      {roomList.slice(0, 8)?.map(item => {
        return <RoomItem itemData={item} key={item.id}></RoomItem>;
      })}
    </SectionRoomsWapper>
  );
});

export default SectionRooms;
