import Image from "next/image";

const PartnerLogos = ({
    heading = "Our Partners",
    partners = []
}) => {
    return (
        <section className="w-full pt-[40px] md:pt-[60px] bg-white">
            <div className="max-w-[1500px] mx-auto px-[20px] md:px-[60px]">
                <h2 className="text-[36px] md:text-[48px] text-center text-[#2C2C2C] font-normal mb-[24px] md:mb-[40px]">
                    {heading}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[40px]">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center bg-[#FFFAEB] border border-[#FFFFFF] rounded-[12px] p-[40px] md:p-[60px] min-h-[150px] md:min-h-[200px]"
                        >
                            <div className="relative w-full h-[80px] md:h-[100px]">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
