import styled from 'styled-components'

export const RoomItemWrapper=styled.div`
  box-sizing: border-box;
  width: 25%;
  padding: 8px;

  .inner{
    width: 100%;
  }

  .cover{
    position: relative;
    box-sizing: border-box;
    padding: 66.6% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }
  .desc{
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props=>props.verifyColor};
  }

  .name{
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price{
    margin: 8px 0;
  }




`