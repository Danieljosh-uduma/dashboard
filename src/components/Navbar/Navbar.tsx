import Logo from '/src/assets/images/project.svg'
import BoardImg from '/src/assets/images/project.svg'
import ProfileImg from '/src/assets/images/profile.svg'
import AnalysisImg from '/src/assets/images/analysis.svg'
import SettingImg from '/src/assets/images/setting.svg'
import LogoutImg from '/src/assets/images/logout.svg'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <nav className='logo'>
                    <a href='' id='logo' data-after='Task Box'>
                        <img src={Logo} alt="Logo" />
                    </a>
                    <nav className='navlist'>
                        <ul>
                            <li data-after="Project"><img src={BoardImg} alt="Board icon"/></li>
                            <li data-after="Profile"><img src={ProfileImg}  alt="Profile icon" /></li>
                            <li data-after="Analysis"><img src={AnalysisImg}  alt="analysis icon" /></li>
                            <li data-after="Setting"><img src={SettingImg}  alt="settings icon" /></li>
                        </ul>
                    </nav>
                </nav>
                <button type='button'>
                    <img src={LogoutImg} alt="Logout icon" />
                </button>
            </nav>

        </>
    )
}