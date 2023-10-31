export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Service23 from '@/components/service'
import Tabs from '@/components/tabs'
import Numbers6 from '@/components/numbers'
// import Tempheader from '@/components/tempheader'

export default function Home() {
  return (
    <>
   {/* <Tempheader/>  */}
      {/* <Hero /> */}
      <Service23/>
      <Features />
      <Tabs/>
      <Zigzag />
      <Numbers6/>

      <Testimonials />

      <Newsletter />
    </>
  )
}
