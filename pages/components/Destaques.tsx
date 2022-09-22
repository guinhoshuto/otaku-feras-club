const Destaques = () => {
    return (
        <div className="flex flex-auto h-96">
            <a href="" className="block w-1/3 h-full bg-purple hover:border-black hover:border-4 relative overflow-hidden">
                <img src="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/03/my-hero-academia-protagonistas-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1" alt="" />
                <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
                    <span className="bg-white inline-block px-4 py-2">categoria</span><br />
                    <h2 className="bg-white  px-2 py-1 mt-1 pxfont-bold text-black inline-block text-md">Título</h2><br />
                    <span className="text-sm bg-slate-100 px-2 py-1 text-zinc-600 inline-block mt-1">chamadinha</span>
                </div>
            </a>
            <a href="" className="block w-1/3 h-full bg-lime hover:border-black hover:border-4 relative overflow-hidden">
                <img src="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/03/my-hero-academia-protagonistas-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1" alt="" />
                <div className="w-full pt-4 px-4 absolute top-0 left-0 right-0">
                    <span className="bg-white inline-block px-4 px-2">categoria</span>
                    <h2 className="font-bold text-white block text-md">Título</h2>
                    <span className="text-sm text-zinc-300 block mt-1">chamadinha</span>
                </div>
            </a>
            <div className="w-1/3 flex flex-col" >
                <div className="h-1/2 bg-yellow hover:border-black hover:border-4"></div>
                <div className="h-1/2 bg-green hover:border-black hover:border-4"></div>
            </div>
        </div>
    )
}

export default Destaques;