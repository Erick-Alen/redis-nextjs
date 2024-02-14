'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const comment = async () => {
    const { data } = await axios.post('/api/comment', {
      text: 'hello',
      tags: ['TypeScript'],
    })
    console.log(data)
  }
  return (
    <div className='flex flex-col-8 gap-8 items-start'>
      <Link href='/commments' prefetch={false}>
        See comments
      </Link>
      <button onClick={comment}>make comment</button>
    </div>
  )
}
