import { NavLink } from 'react-router-dom'
import Logo from '/images/logo.svg'
import HomeIcon from '/images/icon-nav-home.svg'
import MoviesIcon from '/images/icon-nav-movies.svg'
import TVIcon from '/images/icon-nav-tv-series.svg'
import AvatarIcon from '/images/image-avatar.png'
import BookmarkIcon from '/images/icon-nav-bookmark.svg'

export default function Header() {
    return <header className='flex items-center justify-between bg-[#161D2F] p-4'>
        <NavLink to='/'>
            <img src={Logo} alt='logo icon' />
        </NavLink>
        
        <div className='flex gap-8'>
            <NavLink to='/' >
                <img src={HomeIcon} alt='home nav icon' />
            </NavLink>

            <NavLink to='/movies' >
                <img src={MoviesIcon} alt='movies nav icon' />
            </NavLink>

            <NavLink to='/tv-series'>
                <img src={TVIcon} alt='tv nav icon' />
            </NavLink>
            
            <NavLink to='/bookmarked'>
                <img src={BookmarkIcon} alt='bookmark nav icon' />
            </NavLink>  
        </div>
        <img className='w-8 h-8' src={AvatarIcon} alt='user avatar' />
    </header>
}