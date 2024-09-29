

const HeaderCarrusel = () => {
   


    return (
        <div className="max-h-[70vh] z-1 relative">
            <div>

            <div className='flex relative max-h-[70vh]'>
                <div className="h-full w-2/3 ">
                    <img className='max-h-[70vh] w-full object-cover' src={"https://placehold.co/534x534/EEE/31343C"} alt="" />
                </div>
                <div className="bg-yellow-200 bg-opacity-75 w-full 
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

                <div className='relative max-h-[70vh]  w-1/3 block translate-y-[-80px]'>
                    <div className='bg-[#F3D6D8]  w-full content-[""] absolute top-0 -bottom-[80px]' />
                </div>
            </div>


            </div>
            <div className="controls flex gap-8 absolute bottom-[17%] right-[28%]">
                
                <span className="material-symbols-outlined cursor-pointer">
                    arrow_back_ios_new
                </span>
                <span className="material-symbols-outlined cursor-pointer">
                    arrow_forward_ios
                </span>
            </div>
        

        </div>

    )
}

export default HeaderCarrusel