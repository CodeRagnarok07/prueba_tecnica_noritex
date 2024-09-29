

export default function Map() {
    return (
        <div>
            
            <div className="flex flex-col items-center text-center mx-auto gap-5">
                <h2 className="text-6xl">Lorem ipsum <br /> dolor sit.</h2>
                <a href="" className="flex items-center gap-4"> 
                        Lorem, ipsum dolor.
                        <span className="material-symbols-outlined scale-150">
                        arrow_right_alt
                        </span>
                        </a>
            </div>

            <div className="w-full mt-4">
            <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2176.1224779318713!2d-69.37373027480129!3d10.061996423280725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sve!4v1727610810791!5m2!1ses-419!2sve" width="1400" height="340" 
             allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
        )
    
}