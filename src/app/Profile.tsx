'use client';
import useSWR from 'swr';
import fetcher from './swr';

// why call api twice?
// https://github.com/vercel/swr/issues/1952 

// Next.js RSC import error: 'swr' does not contain a default export (imported as 'useSWR') 
// https://github.com/vercel/swr/issues/2694

export default function Profile() {
  const { data, error, isLoading } = useSWR('/posts/1', fetcher);

  return isLoading ? null : <div className='text-black'>{data.title}</div>;
}
