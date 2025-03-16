import ArrowdownImg from '/src/assets/images/arrow_down.svg'
import LightImg from '/src/assets/images/light.svg'
import DarkImg from '/src/assets/images/dark.svg'
import { useState } from 'react'
import './Sidebar.css'

export default function Sidebar() {
    
    

    return (
        <>
           <nav className='sidebar'>
                <h1>
                    Projects 
                    <span>+</span>
                </h1>
                
                <Section name='Team'/>
                <Section name='Projects'/>
                <Section name='Tasks'/>


                <DarkMode />
           </nav>

           
        </>
    )
}
interface ISection {
    name: string
}

function Section(props: ISection) {
    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(prevShow => !prevShow)
    }

    return (
        <>
            <h3 className='section' onClick={handleShow} >
                {props.name}
                <img className={show? "show-img": ''} src={ArrowdownImg} alt="arrow down" />
            </h3>
            {show && 
            <ul className='section-list'>
                <li><a className='active-anchor' href="">Design system</a></li>
                <li><a href="">Devops</a></li>
                <li><a href="">Product Manager</a></li>
            </ul>
            }
        </>
    )
}

function DarkMode() {
    let mode: string | boolean | null = localStorage.getItem('theme')
    if (mode === 'light') {
        mode = false
    }

    const [darkMode, setDarkMode] = useState(true)

    function changeToDarkMode() {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute('data-theme', 'dark')
        setDarkMode(true)
    }
    function changetoLightMode() {
        localStorage.setItem('theme', 'light')
        document.documentElement.setAttribute('data-theme', 'light')
        setDarkMode(false)
    }

    return (
        <ul className="toggle-dark">
            <li className={!darkMode? 'active': ''} onClick={changetoLightMode}>
                <img src={LightImg} alt="" />
                <span>Light</span>
            </li>
            <li className={darkMode? 'active': ''} onClick={changeToDarkMode}>
                <img src={DarkImg} alt="" />
                <span>Dark</span>
            </li>
        </ul>
    )
}