import Image from "next/image";
import PricingImage from '../../assets/images/pricingLeft.png';

const Pricing = () => {
    return (
        <div className="relative font-poppins h-[25rem] container">
            {/* Image on the left */}
            <Image
                src={PricingImage}
                alt="Descriptive Alt Text"
                className="absolute -left-[5%] top-0 h-full object-cover w-[30%] z-0"
            />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-center items-center text-center p-8">
                <h1 className="text-white text-[2.5rem] font-semibold">See Our Plans and Pricing</h1>
                <p className="text-white text-[1.25rem]">Have a project in mind? Let’s collaborate and bring your vision to life!</p>
                
                <div className="mt-6 flex flex-row space-x-6 justify-center font-bold text-[1.25rem]">
                    <button className="bg-tealgradient hover:bg-green shadow-custom-shadow-small p-4 w-[13rem] rounded-[1.25rem]" style={{border: '1.276px solid #5E5E5E',   backdropFilter: 'blur(2.55px)'}}>See Pricing</button>
                    <button className="bg-tealgradient hover:bg-green shadow-custom-shadow-small p-4 w-[13rem] rounded-[1.25rem]"style={{border: '1.276px solid #5E5E5E',   backdropFilter: 'blur(2.55px)'}}>Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
