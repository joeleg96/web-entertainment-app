import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";
import TrendingBar from "../components/TrendingBar";

export default function Home() {
    return <section className='px-4'>
        <SearchBar />
        <SectionTitle
            title="Trending"
        />
        <TrendingBar />
        <SectionTitle 
            title="Recommended for you"
        />

    </section>
}