import SearchBar from "../components/SearchBar"
import SectionTitle from "../components/SectionTitle"
import Card from "../components/Card";
import MovieIcon from '/images/icon-category-movie.svg'
import TVSeriesIcon from '/images/icon-category-tv.svg'
import { useBookmarks } from "../context/BookmarkContext"
import { useState } from 'react';
import data from '../../data.json';

export default function Bookmarked() {

    const { bookmarks } = useBookmarks();

    const bookmarkedItems = bookmarks
        .map(id => data.find(item => (item.id ?? `${item.title}::${item.year}`) === id))
        .filter(Boolean);

    const bookmarkedMovies = bookmarkedItems.filter(
        item => item.category === "Movie"
    );

    const bookmarkedTV = bookmarkedItems.filter(
        item => item.category === "TV Series"
    );

    const [searchQuery, setSearchQuery] = useState("");

    const filteredBookmarkedMovies = bookmarkedMovies.filter(
        movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const filteredBookmarkedTV = bookmarkedTV.filter(
        series => series.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) 

    

    return <section className='px-4 pb-6 lg:py-7'>
        <SearchBar 
            placeholder="Search for bookmarked shows"
            onChange={ e => setSearchQuery(e.target.value)}
        />
        <SectionTitle 
            title="Bookmarked Movies"
        />
        
            {bookmarkedMovies.length === 0 ? (
                <p className='text-white'>You currently don't have any movies bookmarked.</p> 
            ) : filteredBookmarkedMovies.length === 0 ? (
                <p className='text-white'>No bookmarked movies match your search.</p>
            ) : (
                <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
                    {filteredBookmarkedMovies.map(movie => 
                        <Card 
                            key={movie.title}
                            img={import.meta.env.BASE_URL + movie.thumbnail.regular.large}
                            year={movie.year}
                            category={movie.category}
                            icon={MovieIcon}
                            rating={movie.rating}
                            title={movie.title}
                        />)}
                </div>
                
            )}

        <SectionTitle 
            title="Bookmarked TV Series"
        />
            {bookmarkedTV.length === 0 ? (
                <p className='text-white'>You currently don't have any TV Series bookmarked.</p> 
            ) : filteredBookmarkedTV.length === 0 ? (
                <p className='text-white'>No bookmarked TV series match your search.</p>
            ) : (
                    <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
                    {filteredBookmarkedTV.map(show => 
                    <Card 
                        key={show.title}
                        img={import.meta.env.BASE_URL + show.thumbnail.regular.large}
                        year={show.year}
                        category={show.category}
                        icon={TVSeriesIcon}
                        rating={show.rating}
                        title={show.title}
                    />)}
                   </div> 
                )
            }
        

        
    </section> 
    
}