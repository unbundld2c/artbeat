import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ slug, image, date, readTime, title, description }) => {
    const truncateText = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + "...";
    };

    return (
        <Link href={`/blogs/${slug}`} className="block group">
            <div className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        unoptimized
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="p-[20px]">
                    <div className="flex gap-[8px] mb-[12px]">
                        <span className="text-[#2C2C2C] font-normal text-[14px] leading-[21px]">
                            {date}
                        </span>
                        <span className="text-[#2C2C2C] text-[24px] font-bold leading-[10px] items-center">
                            .
                        </span>
                        <span className="text-[#2C2C2C] font-normal text-[14px] leading-[21px]">
                            {readTime}
                        </span>
                    </div>

                    <h3 className="text-[#2C2C2C] font-semibold text-[18px] leading-[24px] mb-[8px] group-hover:text-[#E2725B] transition-colors duration-300 break-words">
                        {title}
                    </h3>

                    <p className="text-[#6B6B6B] font-normal text-[14px] leading-[21px] break-words">
                        {truncateText(description)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
