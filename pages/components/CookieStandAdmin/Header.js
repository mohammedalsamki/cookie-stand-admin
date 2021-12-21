import Link from 'next/link'
import Overview from '../../Overview'

const header = () => {
  return (
    <header
      className='flex justify-between p-4'
      style={{ backgroundColor: '#15B981' }}
    >
      <p className='text-3xl'>Cookie Stand Admin</p>
      <Link href='Overview'>
        <a className='p-1 bg-gray-200 rounded-md'>{Overview} Overview</a>
      </Link>
    </header>
  )
}

export default header
