import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import useWindowSize from '../../hooks/useWindowSize';
import {
  Wrapper,
  WrapperForFixSideBar,
  MainWrapper,
} from './MainLayout.styled';

const MainLayout = () => {
  const [isVisible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible((isVisible) => !isVisible);

  const size = useWindowSize();
  useEffect(() => {
    setVisible(size.width > 1439 && true);
  }, [size.width]);

  return (
    <>
      <Wrapper>
        <WrapperForFixSideBar>
          {isVisible && <SideBar onToggle={toggleSidebar} />}
        </WrapperForFixSideBar>
        <MainWrapper>
          <Header onToggle={toggleSidebar} />
          <Outlet />
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default MainLayout;
