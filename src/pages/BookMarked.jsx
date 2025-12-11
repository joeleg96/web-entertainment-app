import SearchBar from "../components/SearchBar"
import SectionTitle from "../components/SectionTitle"
import React from "react";


export default function Bookmarked() {
    return <section className='px-4 pb-6 lg:py-7'>
        <SearchBar 
            placeholder="Search for bookarked shows"
        />
        <SectionTitle 
            title="Bookmarked Movies"
        />

        <SectionTitle 
            title="Bookmarked TV Series"
        />
    </section> 
    
}