import SearchIcon from '/images/icon-search.svg'

export default function SearchBar() {
    return <section className='flex gap-4 pt-6'>
        <img src={SearchIcon} alt='search icon' />
        <input
            className='text-white w-[214px]'
            placeholder='Search for movies or TV series'></input>
    </section>
}