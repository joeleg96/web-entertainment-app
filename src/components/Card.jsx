import EmptyBookmark from '/images/icon-bookmark-empty.svg';


export default function Card({img, year, category, icon, rating, title }) {
    return <section className='relative'>
        <img className='rounded-xl' src={img} />
        <div className='absolute flex justify-center items-center top-3 right-3 w-8 h-8 rounded-full bg-[#5A698F]/50 hover:cursor-pointer'>
            <img src={EmptyBookmark}/>
        </div>
        <div>
            <ul className='flex text-[1rem] text-white font-light opacity-75'>
                <li>{year}</li>
                <li className="flex items-center pl-3 list-none before:content-['•'] after:mr-2"><img className='w-4 mx-2' src={icon} />{category}</li>
                <li className="flex items-center pl-3 list-none before:content-['•'] after:mr-2 gap-2">{rating}</li>
            </ul>
            <h3 className='text-white font-semibold mt-1'>{title}</h3>
        </div>
    </section>
}