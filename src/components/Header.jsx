import MenuItem from './menuItem';
import Link from 'next/link';
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
export default function Header(){
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>{/* mx-auto is used for To center a container and max-w is setting maximum width of utilities and justify-between means creatin a gap between (ex:home about and imdb clone(in amber color)*/}
            <div className='flex gap-4'>   {/* make the gap between home and about by 4 */}
              <MenuItem title="Home" address='/' Icon={AiFillHome}/>
              <MenuItem title="About" address='/about' Icon={BsFillInfoCircleFill}/>
            </div>
            <Link href={'/'} className='flex gap-1 items-center'> {/* items-center make the elements in the center and flex will lie the item horizontally . creating a link on clicking the imdb it would go the homepage*/ }
             <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>  {/* py-means padding in yaxis and px padding in x axis and rounded make the corner rounded in large */}
             <span className='text-xl hidden sm:inline'>Clone</span>
            </Link>
        </div>  
    );
}