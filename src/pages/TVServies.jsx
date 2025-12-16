import data from '../../data.json';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import SectionTitle from '../components/SectionTitle';
import TVSeriesIcon from '/images/icon-category-tv.svg'
import { useState } from 'react';


export default function TVSeries() {
    const [tvQuery, setTVQuery] = useState("");
    const shows = data.filter(item=>item.category==="TV Series")
    const filteredShows = shows.filter(show => 
        show.title.toLowerCase().includes(tvQuery.toLowerCase())
    );
    
    return <section className="px-4 pb-6 lg:py-7 bg-[#10141E] min-h-screen w-full">
        <SearchBar
            placeholder="Search for TV series"
            onChange={e=>setTVQuery(e.target.value)}
        />
        <SectionTitle 
            title="TV Series"
        />
        <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
           {filteredShows.map(item=>
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