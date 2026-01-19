import Image from "next/image";

const WhyPartnerSection = ({
    heading = "Why Partner with Artbeat ?",
    description = "At Artbeat, we believe that tackling complex issues like educational equity and child development demands a shared vision. We refuse to work in silos or hold onto \"secrets\" of success. Just as we teach children that sharing is caring, we operate on the principle that open collaboration is the only way to scale true impact across the globe. By partnering with us, you are not just supporting a program, you are joining a movement that champions shared knowledge and collective action.",
    imageSrc,
    imageAlt = "Child illustration",
    benefits = [
        "Access to Proven Best Practices, Innovation and Expertise",
        "Measurable, Shared Impact",
        "Deep Community Alignment",
        "Customized Engagement",
        "Synergistic Problem-Solving"
    ]
}) => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-[1500px] pt-[40px] md:pt-0 mx-auto px-[20px] md:px-[60px]">
                <div className="text-left md:text-center mb-[24px] md:mb-[40px]">
                    <h2 className="text-[36px] md:text-[48px] text-[#2C2C2C] font-normal mb-2">
                        {heading}
                    </h2>
                    <p className="text-[16px] md:text-[20px] leading-[150%] text-[#2C2C2C] font-normal">
                        {description}
                    </p>
                </div>

                <div className="bg-[#FFFCF7] p-[20px] md:p-[40px] rounded-[12px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[40px] items-start">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        <div>
                            <h3 className="text-[20px] text-[#2C2C2C] font-bold mb-[20px] leading-[130%] !whitespace-normal">
                                Key Benefits of Our Partnership Model
                            </h3>

                            <div className="flex flex-col gap-[20px]">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#FFF3F0] rounded-[12px] py-[20px] pl-[20px] flex items-start"
                                    >
                                        <p className="text-[16px] leading-[150%] text-[#2C2C2C] leading-[100%] font-semibold">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPartnerSection;
