import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import HeaderLeft from './c-cpn/header-left';
import HeaderCenter from './c-cpn/header-center';
import HeaderRight from './c-cpn/header-right';

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
