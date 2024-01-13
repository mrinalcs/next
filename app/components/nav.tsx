import Link from 'next/link';


export function Navbar() {
    return (
      <header>
        <nav>
            <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/note">note</Link></li>
            </ul>
        </nav>
      </header>
    );
  }