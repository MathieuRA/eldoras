import React from 'react';

import { elastic as Menu } from 'react-burger-menu';

import './template.css';
import './menu.css'

export const BackgroundImg = ({ alt, img }) => {
  return (
    <img draggable={false} className={'fullScreenImg'} src={`./assets/img/${img}`} alt={alt} />
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
    <nav className={'menu'}>
      <ul className='menuContainer'>
        <li>
          <div>
            <Menu width={200} pageWrapId={'wrapId'} >
                <Link>Accueil</Link>
                <Link>A Propos</Link>
                <Link>Nous rejoindre</Link>
                <Link disabled>Actualité</Link>
                <Link disabled>Forum</Link>
                <Link disabled>Boutique</Link>
            </Menu>
          </div>
        </li>
        <li className='titleMenu'>ELDORAS</li>
        <li>
          <div className='rowButtonLink'>
            <Link button disabled>Shop</Link>
            <Link button disabled>Actu</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export const Link = ({children,disabled = false,dark = false,button = false }) => {
  let style = 'menu-item'
  if(disabled){
    style += ' disabled'
  }
  if(button){
    style += ' buttonLink'
  }
  if(dark){
    style += ' darkButton'
  }
  return <p className={style}><span>{children}</span></p>
}