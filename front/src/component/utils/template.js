import React from "react";

import { elastic as Menu } from "react-burger-menu";

import "./template.css";
import './menu.css'

export const BackgroundImg = ({ alt, img }) => {
  return (
    <img className={"fullScreenImg"} src={`./assets/img/${img}`} alt={alt} />
  );
};

export const Section = ({ children, section }) => {
  return <section className={`fullScreen ${section}`}>{children}</section>;
};

export const Filter = ({ children, side, rotate }) => {
  return (
    <div
      className={`filter`}
      style={{ float: side, transform: `rotateZ(${rotate}deg)` }}
    ></div>
  );
};

export const MainMenu = ({ children }) => {
  return (
    <nav className={"menu"}>
      <ul className="menuContainer">
        <li>
          <div>
            <Menu width={200} pageWrapId={'wrapId'} >
                <ItemMenu>Accueil</ItemMenu>
                <ItemMenu>A Propos</ItemMenu>
                <ItemMenu>Nous rejoindre</ItemMenu>
                <ItemMenu disabled>Actualité</ItemMenu>
                <ItemMenu disabled>Forum</ItemMenu>
                <ItemMenu disabled>Boutique</ItemMenu>
            </Menu>
          </div>
        </li>
        <li className="titleMenu">ELDORAS</li>
        <li>
          <div>SHOP</div>
        </li>
      </ul>
    </nav>
  );
};

const ItemMenu = ({children,disabled}) => <p className={`menu-item ${disabled && 'disabled'}`}>{children}</p>
