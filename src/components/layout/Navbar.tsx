import logo from '@/assets/logo.png'

function App() {
    const leftLinks  = [
      "tends", "collections", "tips & guides"
    ]
    const  rightLinks = [
      "find a store", "contact us"
    ]

    return (
      <div>

     <nav className='container mx-auto text-[#9B9FA2] flex justify-between'>
      <ul className='flex gap-8 items-center '>
         <a href="/">
        <img className='w-auto h-[80px]' src={logo} alt="" />
         </a>
         {leftLinks.map((link) => (
            <li><a href={link}>{link}</a></li>
            
         ))}
         
      </ul>
      <ul className='flex gap-8 items-center '>
         {rightLinks.map((link) => (
            <li><a href={link}>{link}</a></li>
            
         ))}
         <li>
            <div className='-scale-x-100 font-bold '>
               <span className="material-symbols-outlined translate-y-1">
                  search
               </span>
            </div>
         </li>
      </ul>
     </nav>
      </div>
    )
  }
  
  export default App