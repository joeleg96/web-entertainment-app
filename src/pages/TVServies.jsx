import data from '../../data.json';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import SectionTitle from '../components/SectionTitle';
import TVSeriesIcon from '/images/icon-category-tv.svg'
import React from "react";


export default function TVSeries() {
    const movies = data.filter(item=>item.category==="TV Series")
    
    return <section className='px-4 pb-6 lg:py-7'>
        <SearchBar
            placeholder="Search for TV series"
        />
        <SectionTitle 
            title="TV Series"
        />
        <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
           {movies.map(item=>
            <Card 
                key={item.title}
                img={import.meta.env.BASE_URL + item.thumbnail.regular.large}
                year={item.year}
                category={item.category}
                icon={TVSeriesIcon}
                rating={item.rating}
                title={item.title}
            />
            )} 
        </div>  
    </section>
}