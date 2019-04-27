import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 16px;
`;

const layout = ({ children }) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <Main>{children}</Main>
    </>
  );
};

export default layout;
