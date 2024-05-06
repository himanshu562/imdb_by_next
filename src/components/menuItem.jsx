import Link from 'next/link';
export default function MenuItem( {title,address,Icon}){
    return (
        <Link href={address} className='hover:text-amber-500'> {/* when we hover on the text it change color to amber-500 */}
            <Icon className="text-2xl sm:hidden"/>  {/* sm:hidden hide the text for the small screen and above ...xl is used to enlarge the text*/}
            <p className='uppercase hidden sm:inline text-sm'>{title}</p>    {/* we can use  text-transform:uppercase instead of uppercase  and hidden sm:inline make the home and about text visble in larger screen and hide in smaller screen and text-sm make text smaller */}
        </Link>                                                              
    )
}