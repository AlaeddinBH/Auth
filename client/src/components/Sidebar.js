import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import '../Sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <Menu>
      <a className="menu-item" href="/Profil">
        Profile
      </a>
      <a className="menu-item" href="/Product">
        Articles
      </a>
      <a className="menu-item" href="/#">
        Nous Contactez
      </a>
    </Menu>
    </div>
  )
}

export default Sidebar;

