import Image from "next/image";

const ContentSection = ({
    title,
    imageSrc,
    imageAlt,
    children,
    reverse = false,
}) => {
    return (
        <section className="bg-white max-w-[1500px] mx-auto pt-[40px] md:py-[50px] px-[16px] md:px-[60px]">
            <div className="mx-auto grid md:grid-cols-2 gap-[24px] md:gap-x-[100px] items-center">
                <div className={`relative w-full h-[233px] md:h-[450px] rounded-[20px] overflow-hidden ${reverse ? "md:order-last" : ""}`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        className="object-cover w-full h-full"
                        width={630} 
                        height={450} 
                        unoptimized
                    />
                </div>

                <div>
                    <h2 className="mb-[16px] text-[36px] md:text-[48px] md:text-left text-center">{title}</h2>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default ContentSection;