import MovieIcon from '/images/icon-category-movie.svg'
import TVIcon from '/images/icon-category-tv.svg'
import EmptyBookmark from '/images/icon-bookmark-empty.svg';
import FilledBookmark from '/images/icon-bookmark-full.svg'
import { useBookmarks } from '../context/BookmarkContext';


export default function TrendingCard({thumbnail, year, category, rating, title}){
    const divClasses = 'relative w-70 h-40 bg-cover bg-center rounded-xl md:w-110 md:h-55'
    const Icon = category === "Movie" ? MovieIcon : TVIcon;

    const { bookmarks, dispatch } = useBookmarks();
    const id = `${title}::${year}`;
    const isBookmarked = bookmarks.includes(id);

    const toggle = () => {
        dispatch({ type: "TOGGLE_BOOKMARK", payload: id });
    };

    return (
    <div 
        className={divClasses}
        style={{ backgroundImage: `url(${thumbnail})` }}>
            <div 
                className='absolute flex justify-center items-center top-3 right-3 w-8 h-8 rounded-full bg-[#5A698F]/50 hover:cursor-pointer hover:scale-110'
                onClick={toggle}
                >
                <img 
                    src={isBookmarked ? FilledBookmark : EmptyBookmark}
                    alt={isBookmarked ? "bookmarked" : "not bookmarked"} 
                />
            </div>
            <div className='absolute bottom-3 left-3'>
                <ul className='flex text-[1rem] text-white font-light opacity-75'>
                    <li>{year}</li>
                    <li className="flex items-center pl-3 list-none before:content-['•'] after:mr-2"><img className='w-4 mx-2' src={Icon} />{category}</li>
                    <li className="flex items-center pl-3 list-none before:content-['•'] after:mr-2 gap-2">{rating}</li>
                </ul>
                <h3 className='text-white font-semibold mt-1'>{title}</h3>
            </div>
    </div>
)}