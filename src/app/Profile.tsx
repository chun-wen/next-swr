import useSWR from 'swr';
import fetcher from './swr';

// where wrong  is  'posts/1'  should be  '/posts/1'

export default function Profile() {
  const { data, error, isLoading } = useSWR('/posts/1', fetcher);

  return isLoading ? null : <div className='text-black'>{data.title}</div>;
}
