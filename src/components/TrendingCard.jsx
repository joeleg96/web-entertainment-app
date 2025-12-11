import MovieIcon from '/images/icon-category-movie.svg'
import TVIcon from '/images/icon-category-tv.svg'
import EmptyBookmark from '/images/icon-bookmark-empty.svg';
import React from "react";


export default function TrendingCard({thumbnail, year, category, rating, title}){
    const divClasses = 'relative w-70 h-40 bg-cover bg-center rounded-xl md:w-110 md:h-55'
    const Icon = category === "Movie" ? MovieIcon : TVIcon;

    return (
    <div 
        className={divClasses}
        style={{ backgroundImage: `url(${thumbnail})` }}>
            <div className='absolute flex justify-center items-center top-3 right-3 w-8 h-8 rounded-full bg-[#5A698F]/50 hover:cursor-pointer'>
                <img src={EmptyBookmark}/>
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