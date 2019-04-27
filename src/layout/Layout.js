import React from 'react';

const layout = ({ children }) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{children}</main>
    </>
  );
};

export default layout;
