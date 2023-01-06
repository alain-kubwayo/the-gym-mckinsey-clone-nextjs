import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../SectionWrapper";

const Hero = () => {
    return ( 
        <div className="bg-hero-texture h-[80vh] bg-cover big-no-repeat">
            <SectionWrapper customStyles="px-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-48 items-center h-full">
                    <div className="md:-ml-10">
                        <img src="/images/pendulum.png" alt="Pendulum" />
                    </div>
                    <div className="space-y-6 max-w-[550.8px]">
                        <h2 className="text-[44px] font-bold leading-[2.85rem]">Tech highlights from 2022—in eight charts</h2>
                        <p className="text-[18px]">Here&aposs a look back at some of the important technology story lines from the year that was.</p>
                        <Link href="#" className="text-base font-bold flex gap-x-2 group">
                            <span className="group-hover:text-secondary-100">Take a look at tech</span>
                            <Image src="/images/arrow-right.svg" width={24} height={24} alt="Arrow Right" className="group-hover:translate-x-[40%] duration-300" />
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
 
export default Hero;