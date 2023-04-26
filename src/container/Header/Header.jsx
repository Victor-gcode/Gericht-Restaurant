import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app_wrapper_info">
      <SubHeading title="Chase the new Flavour"/>
      <h1 className="app__header-h1">The Key to <br /> Fine Dinning</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>Sit tellus lobortis sed senectus vivamus molestie. <br />Condimentum volutpat morbi facilisis quam scelerisque <br />sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Explore Menu</button>
      
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
