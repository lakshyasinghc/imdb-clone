import Image from 'next/image'
import React from 'react'
import { ThumbUpIcon } from '@heroicons/react/outline';

export default function Card({result}) {
    const BASE_URL="https://image.tmdb.org/t/p/original";
  return (
    <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 p-3 select-none hover:text-red-100 cursor-pointer active:text-red-400 xl:hover:scale-105">
        <Image layout='responsive' className="" src={BASE_URL +result.backdrop_path} width={100} height={100}/>
        <div className='p-2'>
            <p className="truncate text-lg"> {result.overview}</p>
            <h2 className="text-lg font-bold">{result.title || result.name}</h2>
            <p className="flex items-center">{result.release_date||result.first_air_date}
            <ThumbUpIcon className='h-5 ml-3 mr-1'/>
            {result.vote_count}
            </p>
           
        </div>
    </div>
  )
}
