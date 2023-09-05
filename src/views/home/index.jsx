import React, { memo, useEffect } from 'react';
import { HomeWrapper } from './style';
import HomeBanner from './c-cpn/home-banner';
import SectionHeader from '@/components/section-header';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataAction } from '@/stores/modules/home';
import SectionRooms from '@/components/section-rooms';

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  console.log(goodPriceInfo);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
