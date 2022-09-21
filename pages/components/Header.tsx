import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-bege p-8" >
      <nav className="px-8 mt-8">
        <ul className="flex gap-8 justify-end">
          <li className="inline-block w-32 h-12 text-center border-2 border-black bg-purple">
            <Link href="/noticias"><a className="leading-8">Notícias</a></Link>
          </li>
          <li className="inline-block w-32 h-12 text-center border-2 border-black bg-green">
            <Link href="/animes"><a className="leading-8">Anime</a></Link>
          </li>
          <li className="inline-block w-32 h-12 text-center border-2 border-black bg-yellow">
            <Link href="/manga"><a className="leading-8">Mangá</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;