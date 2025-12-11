import data from '../../data.json';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import SectionTitle from '../components/SectionTitle';
import MovieIcon from '/images/icon-category-movie.svg'
import React from "react";


export default function Movies() {
    const movies = data.filter(item=>item.category==="Movie")
    
    return <section className='px-4 pb-6 lg:py-7'>
        <SearchBar
            placeholder="Search for movies"
        />
        <SectionTitle 
            title="Movies"
        />
        <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
           {movies.map(item=>
            <Card
                key={item.title}
                img={import.meta.env.BASE_URL + item.thumbnail.regular.large}
                year={item.year}
                category={item.category}
                icon={MovieIcon}
                rating={item.rating}
                title={item.title}
            />
            )} 
        </div>  
    </section>
}