import React from 'react'
import { BackgroundImg,Filter,MainMenu,Section } from './utils/template'


export default function Home (){
return (
    <>
        <MainMenu></MainMenu>
        <main id={"wrapId"}>
        <Section section={'home'}>
            <BackgroundImg img={'bgHome.jpg'} alt={'lossantos'}/>
            <Filter side={'right'} rotate={10}>Ok</Filter>
            <p>OK</p>

        </Section>
        </main>
        
    </>) }
