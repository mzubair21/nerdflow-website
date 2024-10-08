import Image from "next/image";
import PricingImage from '../../assets/images/pricingLeft.png';

const Pricing = () => {
    return (
        <div className="relative font-poppins h-[25rem]">
            {/* Image on the left */}
            <Image
                src={PricingImage}
                alt="Descriptive Alt Text"
                className="absolute left-0 top-0 h-full object-cover w-[30%] z-0"
            />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-center items-center text-center p-8">
                <h1 className="text-white text-[2.5rem] font-semibold">See Our Plans and Pricing</h1>
                <p className="text-white text-[1.25rem]">Have a project in mind? Let’s collaborate and bring your vision to life!</p>
                
                <div className="mt-6 flex flex-row space-x-6 justify-center font-bold text-[1.25rem]">
                    <button className="bg-tealgradient hover:bg-teal p-6 w-[13rem] rounded-lg">See Pricing</button>
                    <button className="bg-tealgradient hover:bg-teal p-6 w-[13rem] rounded-lg">Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
