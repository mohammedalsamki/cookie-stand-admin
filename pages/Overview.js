
import Footer from './components/CookieStandAdmin/Footer';
import Link from 'next/link'

const Overview = ()=>{
    return(
        <>
         <head>
          <title>Cookie Stand Admin</title>
        </head>
        <main className='flex flex-col h-screen'>
        <header
      className='flex justify-between p-4'
      style={{ backgroundColor: '#15B981' }}
    >
      <p className='text-3xl'>Cookie Stand Admin</p>
      <Link href='/'>
        <a className='p-1 bg-gray-200 rounded-md'> Home</a>
      </Link>
      </header>
          <body>

<div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
  <div class="w3-display-topleft w3-padding-large w3-xlarge">
    Logo
  </div>
  <div class="w3-display-middle">
    <h1 class="w3-jumbo w3-animate-top">COMING SOON</h1>
    <p class="w3-large w3-center">35 days left</p>
  </div>
 
</div>

          </body>
          <Footer />
        </main>
        
        </>
    )
}

export default Overview;