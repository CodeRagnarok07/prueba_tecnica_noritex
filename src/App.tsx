
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroCarrusel from './components/HeroCarrusel'
import Grid from './components/GridLayer'
import Feactures from './components/Feactures'
import Map from './components/Map'

import imagen from './assets/imgs/luxury_bungalow-wallpaper-1680x1050.jpg'



function App() {


  return (
    <>
      <Navbar />
      <HeroCarrusel/>
      <Grid/>

      <section className='container mx-auto mb-28'>
       

        <div className='flex max-h-[55vh]'>

        <img className='w-2/3' src={imagen} alt="" />
        <div className="relative cursor-pointer aspect-square group overflow-hidden *:
                    bg-green-200 bg-opacity-75 p-16 px-12 flex flex-col justify-between
                    ">
                                 <h1 className="text-5xl">Retro: Old is new again</h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur  elit. Repellendus  esse 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, qui deserunt unde rem tempora ipsum explicabo tenetur minus cupiditate amet doloribus! Nobis odit expedita officia dolor ad iure at vero?
                        </p>

                    <div className="flex justify-end items-center">
                        <a href="" className="flex items-center gap-4"> 
                        Lorem, ipsum dolor.
                        <span className="material-symbols-outlined scale-150">
                        arrow_right_alt
                        </span>
                        </a>
                    </div>
                    </div>
        </div>

      </section>

      <Feactures/>

      <Map/>
      <Footer/>
    </>
  )
}

export default App
