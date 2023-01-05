import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const Navbar = () => {
    return ( 
        <SectionWrapper customStyles="px-3 pt-1.5">
            <nav className="flex justify-between pb-6">
                <Link href="/" className="flex items-center gap-x-2 md:gap-x-8">
                    <Image src="/images/hamburger.svg" width={32} height={32} alt="Hamburger" />
                    <h1 className="text-[1.75rem] md:text-[2rem] leading-[1.5rem] md:leading-[2rem] font-light">McKinsey <br /> <span className="pl-8 md:pr-0">&Company</span></h1>
                </Link>
                <ul className="md:flex items-end text-base hidden">
                    <li className="px-4 hover:text-secondary-100">
                        <Link href="/industries" className="border-b-2 border-transparent hover:border-b-2 hover:border-secondary-100 pb-6">
                            Industries
                        </Link>
                    </li>
                    <li className="px-4 hover:text-secondary-100">
                        <Link href="/capabilities" className="border-b-2 hover:border-b-2 border-transparent hover:border-secondary-100 pb-6">
                            Capabilities
                        </Link>
                    </li>
                    <li className="px-4 hover:text-secondary-100">
                        <Link href="/insights" className="border-b-2 hover:border-b-2 border-transparent hover:border-secondary-100 pb-6">
                            Featured Insights
                        </Link>
                    </li>
                    <li className="px-4 hover:text-secondary-100">
                        <Link href="/locations" className="border-b-2 hover:border-b-2 border-transparent hover:border-secondary-100 pb-6">
                            Locations
                        </Link>
                    </li>
                    <li className="px-4 hover:text-secondary-100">
                        <Link href="/careers" className="border-b-2 hover:border-b-2 border-transparent hover:border-secondary-100 pb-6">
                            Careers
                        </Link>
                    </li>
                    <li className="px-4 hover:text-secondary-100">
                        <Link href="/about" className="border-b-2 hover:border-b-2 border-transparent hover:border-secondary-100 pb-6">
                            About Us
                        </Link>
                    </li>
                    <li className="px-4 hover:text-secondary-100">
                        <Link href="/more" className="border-b-2 hover:border-b-2 border-transparent hover:border-secondary-100 pb-6">
                            <select>
                                <option value="">More</option>
                            </select>
                        </Link>
                    </li>
                </ul>
                <div className="flex flex-col justify-end gap-y-2">
                    <div className="text-secondary-100 text-base">
                        <Link href="" className="pr-2">Sign In</Link>
                        <Link href="" className="pl-2 border-l border-black">Subscribe</Link>
                    </div>
                    <Image src="/images/search.svg" width={32} height={32} alt="Search Icon" className="self-end" />
                </div>
            </nav>
        </SectionWrapper>
     );
}
 
export default Navbar;