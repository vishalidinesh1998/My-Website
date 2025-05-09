import {FaBook,FaReact,FaRocket} from "react-icons/fa"

const links=[
    {
        name:"Vite Documentation",
        icon:<FaBook/>
    },
     {
        name:"React Guide",
        icon:<FaReact/>
    },
     {
        name:"Frontend Threads",
        icon:<FaRocket/>
    },
]


function Aside(){
    return(
        <div className="bg-gray-300 shadow-lg rounded-lg h-full text-center items-center" >
            <h2 className="text-2xl font-bold">📌 Related Links</h2>
        <ul className='space-y-2 mt-2'>
            {links.map(link => (
                        <li><a href={link.href} 
                        className='flex items-center text-blue-500 gap-1 hover:underline'>
                            {link.icon}{link.name}
                            </a></li>
                    ))}
        </ul>
        </div>
    )
}
export default Aside