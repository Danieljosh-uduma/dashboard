import CalenderImg from '/src/assets/images/calender.svg'
import ProfilePicImg from '/src/assets/images/profile-pic.svg'
import BoardImg from '/src/assets/images/board.svg'
import './Header.css'


export default function Header() {
    return (
        <header>
            <div className="header">
                <h2>Welcome back, Josh</h2>
                <div className='info'>
                    <div className='date'>
                        <img src={CalenderImg} alt="" />
                        <p>19 March 2025</p>
                    </div>
                    <img className='profile' src={ProfilePicImg} alt="" />
                </div>
            </div>

            <div className="footer">
                <div>
                    <figure className='active-view'>
                        <img src={BoardImg} alt="" />
                        <figcaption>Board view</figcaption>
                    </figure>
                    <div className='add-view'>
                        <span>+</span>
                        <span>Add view</span>
                    </div>
                </div>
                <button>New template</button>
            </div>
        </header>
    )
}