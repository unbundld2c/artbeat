import Image from "next/image";

const ContentSection = ({
    title,
    imageSrc,
    imageAlt,
    children,
    reverse = false,
}) => {
    return (
        <section className="bg-white max-w-[1500px] mx-auto pt-[40px] md:py-[60px] px-[12px] md:px-[43px]">
            <div className="mx-auto grid md:grid-cols-2 md:gap-[90px] gap-[24px] items-center">
                <div className={`relative w-full rounded-xl overflow-hidden ${reverse ? "md:order-last" : ""}`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        className="object-cover w-full h-auto"
                        unoptimized
                    />
                </div>

                <div>
                    <h2 className="mb-[16px] md:text-left text-center">{title}</h2>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default ContentSection;