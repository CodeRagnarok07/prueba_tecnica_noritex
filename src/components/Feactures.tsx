import img2 from '../assets/imgs/cards/2602299_10.jpg'
import img4 from '../assets/imgs/cards/2602299_24.jpg'
import img6 from '../assets/imgs/luxury_terrace-wallpaper-1680x1050.jpg'

export default function Grid() {

    const images = [ img4,  img6, img2]

    return (
       <section className="my-28">
         <header>
        <h1 className='text-5xl italic text-center mb-2'>Lorem ipsum dolor sit.</h1>
        <p className='text-center max-w-2xl mx-auto mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia consectetur modi distinctio possimus fuga doloribus labore repellendus 
        </p>
        </header>

        <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-1">

                   

                    {
                        images.map((image, index) => (
                            <div>

                    <div key={index} className="relative cursor-pointer aspect-square group overflow-hidden">
                        
                        <div className='
                        hidden group-hover:flex
                        z-30 absolute top-0 left-0 w-full h-full bg-black bg-opacity-60
                        
                        '>
                            <div className='font-serif italic text-center text-white flex flex-col justify-center gap-8 h-full mx-[10%]' >

                            <h1 className='text-5xl italic'>Lorem, ipsum dolor. </h1>
                            <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, recusandae?</p>
                            </div>
                            
                        </div>
                        <img className=' transition-all duration-1000 group-hover:scale-110 w-full h-full object-cover' src={image} alt="" />
                    </div>

                    <div className="relative cursor-pointer  group overflow-hidden *:
                    bg-blue-200 bg-opacity-75 p-16 px-12 flex flex-col justify-between
                    ">
                                 <h1 className="text-3xl">Retro: Old is new again</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur  elit. Repellendus  esse </p>

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
                    
                        ))
                    }

                </div>

        </div>


       </section>
    )
}