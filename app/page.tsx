import Image from 'next/image'

import avatar from '@/app/mrinal.webp';


export default function Home() {
  return (
    <main>
      <article>
      <Image
      className='my-photo'
      src={avatar}
      width={120}
      height={200}
      alt="Picture of the author"
      />
        <h1>Mrinal Chandra Sarkar</h1>
        <p>Student of M.Sc in Statistics at Visva Bharati, Shantiniketan.</p>

        
      </article>
    </main>
  )
}
