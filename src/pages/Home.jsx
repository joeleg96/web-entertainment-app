import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";
import TrendingBar from "../components/TrendingBar";
import React from "react";


export default function Home() {
    return <section className='px-4 pb-6 lg:py-7'>
        <SearchBar
            placeholder="Search for movies or TV series" 
        />
        <SectionTitle
            title="Trending"
        />
        <TrendingBar />
        <SectionTitle 
            title="Recommended for you"
        />

    </section>
}