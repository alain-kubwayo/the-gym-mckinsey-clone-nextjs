import Link from "next/link";
import Wrapper from "../ui/Wrapper";

const Trends = () => {
    return ( 
        <section className="bg-gray-100">
        <div className="mx-[108px] py-4">
            <Wrapper>
                <div className="flex gap-x-6">
                    <h2 className="uppercase text-base font-semibold">Trending Insights</h2>
                    <div className="grid grid-cols-4 text-base">
                        <div className="flex">
                            <p className="text-secondary-100 font-bold text-[28px]">1</p>
                            <Link href="#" className="border-l border-secondary-100 pl-2 ml-2 hover:text-secondary-100">2022: The year in charts</Link>
                        </div>
                        <div className="flex">
                            <p className="text-secondary-100 font-bold text-[28px]">2</p>
                            <Link href="#" className="border-l border-secondary-100 pl-2 ml-2 hover:text-secondary-100">2022: The year in images</Link>
                        </div>
                        <div className="flex">
                            <p className="text-secondary-100 font-bold text-[28px]">3</p>
                            <Link href="#" className="border-l border-secondary-100 pl-2 ml-2 hover:text-secondary-100">The state of AI in 2022—and a half decade in review</Link>
                        </div>
                        <div className="flex">
                            <p className="text-secondary-100 font-bold text-[28px]">4</p>
                            <Link href="#" className="border-l border-secondary-100 pl-2 ml-2 hover:text-secondary-100">Every company is a software company: Six ‘must dos’ to succeed</Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
        </section>
    );
}
 
export default Trends;