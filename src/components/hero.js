const hero = () => {
    return (
        <div className="hero group relative h-[70vh] overflow-hidden">
            <div className="absolute right-[-20px] top-0 w-[80%] opacity-0 h-full bg-grad-1 transition-all group-hover:right-0 group-hover:opacity-[1] flex justify-end items-end pb-[5%]">
                <div className="w-[40%] py-3 text-[white] text-left">
                    <h3 className="text-[3rem] font-heavy">Downton <span className="bg-[red] px-2">Abbey</span></h3>
                    <p>2011 | Drama</p>
                    <div className="mt-[5%] w-[90%] mb-[4%]">
                        Robert Crawley, a country estate's owner, is devastated when his heir dies. His distant cousin and heir apparent's freethinking mother clashes with Robert's conservative mother, who is a countess.
                    </div>
                    <button className='mt-3 bg-[red] rounded py-2 px-9 hover:bg-[white] hover:text-[#333] fill-[#333]'>
                        <svg class="w-5 h-5 fill-white inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd"/>
                        </svg>
                        <span>Trailer</span>
                    </button>
                    <button className='mt-2 rounded py-2 px-9 ml-3'>More...</button>
                </div>
            </div>
            <img src="https://i.redd.it/atyf1poo8oe31.jpg" className="w-full h-full object-cover" alt="cover-image" />
        </div>
    )
};

export default hero;