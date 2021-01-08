import React from 'react'

import { BackgroundImg,Filter,MainMenu,Section } from './utils/template'
import { Link } from './utils/template'
import './home.css'


export default function Home (){
return (
    <>
        <MainMenu></MainMenu>
        <main id={"wrapId"}>
        <Section section={'home'}>
            <BackgroundImg img={'bgHome.jpg'} alt={'lossantos'}/>
            <Filter side={'right'} rotate={10}>Ok</Filter>
            <div className='containerHome'>
                <div className={'columnRS'}>
                    <Link button dark>FB</Link>
                    <Link button dark>INSTA</Link>
                    <Link button dark>TWIT</Link>
                </div>
                <div className={'textPresentation'}>
                    <p>
                        Le serveur <span>roleplay</span> dont vous rêviez
                    </p>
                </div>
               
            </div>
        </Section>
        </main>
        
    </>) }
