
import SanityClient from './Client'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <div className='mt-24'>
      <SanityClient />
    </div>
  );
}
