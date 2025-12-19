import SearchBar from "../components/SearchBar";
import SectionTitle from "../components/SectionTitle";
import TrendingBar from "../components/TrendingBar";
import Card from "../components/Card";
import MovieIcon from '/images/icon-category-movie.svg'
import TVIcon from '/images/icon-category-tv.svg'
import data from "../../data.json";

export default function Home() {
    const recommended = data
    .filter(item => item.isTrending === false);

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
        <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {recommended.map(item => 
                <Card
                    img={import.meta.env.BASE_URL + item.thumbnail.regular.large}
                    year={item.year}
                    icon={item.category === "Movie" ? MovieIcon : TVIcon}
                    category={item.category}
                    rating={item.rating}
                    title={item.title}

                />
            )}
        </div>

    </section>
}