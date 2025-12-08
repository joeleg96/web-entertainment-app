import MovieIcon from '/images/icon-category-movie.svg'
import TVIcon from '/images/icon-category-tv.svg'

export default function TrendingCard({thumbnail, year, category, rating, title}){
    const divClasses = 'relative w-70 h-40 bg-cover bg-center rounded-xl'
    const Icon = category === "Movie" ? MovieIcon : TVIcon;

    return (
    <div 
        className={divClasses}
        style={{ backgroundImage: `url(${thumbnail})` }}>
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