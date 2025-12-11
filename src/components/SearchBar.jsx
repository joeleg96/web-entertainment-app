import SearchIcon from '/images/icon-search.svg'

export default function SearchBar({placeholder}) {
    return <section className='flex gap-4 pt-6'>
        <img src={SearchIcon} alt='search icon' />
        <input
            className='text-white w-[214px]'
            placeholder={placeholder}></input>
    </section>
}