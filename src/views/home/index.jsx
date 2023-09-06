import React, { memo, useEffect } from 'react';
import { HomeWrapper } from './style';
import HomeBanner from './c-cpn/home-banner';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataAction } from '@/stores/modules/home';
import HomeSectionV1 from './c-cpn/home-section-v1';
import { isEmptyO } from '@/utils/is-empty-object';
import SectionHeader from '@/components/section-header';
import SectionTabs from '@/components/section-tabs';

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader
            title={discountInfo.title}
            subTitle={discountInfo.subtitle}
          ></SectionHeader>
          <SectionTabs />
        </div>
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
