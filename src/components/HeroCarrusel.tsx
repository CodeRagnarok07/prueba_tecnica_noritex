import img1 from '../assets/imgs/lobby_design-wallpaper-1680x1050.jpg'
import img2 from '../assets/imgs/modern_interior_design-wallpaper-1680x1050.jpg'
import img3 from '../assets/imgs/simple_room-wallpaper-1680x1050.jpg'
import img5 from '../assets/imgs/luxury_bungalow-wallpaper-1680x1050.jpg'
import img6 from '../assets/imgs/luxury_terrace-wallpaper-1680x1050.jpg'


import { useEffect, useState } from 'react'
const HeaderCarrusel = () => {

    const images = [img1, img2, img3, img5, img6, img2]

    const [currentImage, setCurrentImage] = useState(0)

    const hanldeSlider = (bool: boolean) => {
        if (bool) {
            if (currentImage + 1 === images.length) {
                setCurrentImage(0)
            } else {
                setCurrentImage(currentImage + 1)
            }
        } else {
            if (currentImage - 1 < 0) {
                setCurrentImage(images.length - 1)
            } else {
                setCurrentImage(currentImage - 1)
            }
        }
        //setCurrentImage((currentImage + 1) % images.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            hanldeSlider(true)
        }, 5000)
        return () => clearInterval(interval)
    }, [currentImage])


    return (
        <div className="max-h-[70vh] z-1 relative">

            <div className='carrusel'>

                {images.map((image, index) => (
                    
                    <div className={`slider flex-shrink-0 flex w-full relative max-h-[70vh] `

                    + (index === currentImage ? 'active' : '')

                    }>
                        <div className={"h-full w-2/3 overflow-y-hidden "}
                        >
                            <img className='bg_img  max-h-[70vh] w-full object-cover' 
                            src={image} alt="" />
                        </div>

                        <div className="
                        card_info
                        bg-yellow-200  w-full 
                        max-w-[40%] min-h-[40vh] absolute z-50 top-[20%]  right-[10%] 
                        px-8 py-8  flex flex-col justify-between
                        ">
                            <h1 className="text-7xl">Retro: Old is new again</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur minima quaerat, sed facere cum vel provident sit dolorum, at laborum ratione esse </p>

                            <div className="flex justify-end items-center">
                                <a href="" className="flex items-center gap-4">
                                    Lorem, ipsum dolor.
                                    <span className="material-symbols-outlined scale-150">
                                        arrow_right_alt
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className='
                        bg_color
                        relative max-h-[70vh]  w-1/3 block translate-y-[-80px]'>
                            <div className='bg-[#ffa0a6]  w-full content-[""] absolute top-0 -bottom-[80px]' />
                        </div>
                    </div>
                ))}

            </div>

            <div className="controls flex gap-8 absolute bottom-[17%] right-[28%]">

                <span onClick={() => hanldeSlider(false)} className="material-symbols-outlined cursor-pointer">
                    arrow_back_ios_new
                </span>
                <span onClick={() => hanldeSlider(true)} className="material-symbols-outlined cursor-pointer">
                    arrow_forward_ios
                </span>
            </div>


        </div>

    )
}

export default HeaderCarrusel