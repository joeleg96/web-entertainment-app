import { NavLink } from 'react-router-dom'
import Logo from '/images/logo.svg'
import HomeIcon from '/images/icon-nav-home.svg'
import MoviesIcon from '/images/icon-nav-movies.svg'
import TVIcon from '/images/icon-nav-tv-series.svg'
import AvatarIcon from '/images/image-avatar.png'
import BookmarkIcon from '/images/icon-nav-bookmark.svg'

export default function Header() {
    return <header className='flex items-center justify-between sticky top-0 z-2 bg-[#161D2F] p-4 lg:flex-col lg:justify-between lg:h-[850px] lg:top-10 lg:min-w-20 lg:rounded-xl lg:left-2 lg:mr-2'>
        <NavLink to='/'>
            <img className='lg:w-8' src={Logo} alt='logo icon' />
        </NavLink>
        
        <div className='flex gap-8 lg:flex-col lg:gap-8'>
            <NavLink to='/' >
                {({ isActive }) => (
                    <div className={`
                    relative
                    inline-flex
                    justify-center
                    ${isActive ? "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:block after:rounded-md after:bg-white"  : "opacity-75"}`}>
                        <img
                        src={HomeIcon}
                        className="w-7 transition duration-200 hover:scale-110"
                        alt="home nav icon"
                        />
                    </div>
                )}
            </NavLink>

            <NavLink to='/movies' >
                {({ isActive }) => (
                    <div className={`
                    relative
                    inline-flex
                    justify-center
                    ${isActive ? "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:block after:rounded-md after:bg-white"  : "opacity-75"}`}>
                        <img
                        src={MoviesIcon}
                        className="w-7 transition duration-200 hover:scale-110"
                        alt="movies nav icon"
                        />
                    </div>
                )}
            </NavLink>

            <NavLink to='/tv-series'>
                {({ isActive }) => (
                    <div className={`
                    relative
                    inline-flex
                    justify-center
                    ${isActive ? "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:block after:rounded-md after:bg-white"  : "opacity-75"}`}>
                        <img
                        src={TVIcon}
                        className="w-7 transition duration-200 hover:scale-110"
                        alt="tv nav icon"
                        />
                    </div>
                )}
            </NavLink>
            
            <NavLink to='/bookmarked'>
            {({ isActive }) => (
                    <div className={`
                    relative
                    inline-flex
                    justify-center
                    ${isActive ? "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:block after:rounded-md after:bg-white"  : "opacity-75"}`}>
                        <img
                        src={BookmarkIcon}
                        className="w-7 transition duration-200 hover:scale-110"
                        alt="bookmark nav icon"
                        />
                    </div>
                )}
            </NavLink>  
        </div>
        <img className='w-8 h-8' src={AvatarIcon} alt='user avatar' />
    </header>
}