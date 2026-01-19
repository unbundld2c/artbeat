import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const defaultBlogs = [
  {
    img: assets.blogImage,
    title: "Our Work with Governments",
    desc: "We work with the government to find solutions for pesky problems in education. We mainstream our Story Pedagogy™ to make learning fun in government schools.",
    date: "July 6 2023",
    read: "2min Read"
  },
  {
    img: assets.blogImage,
    title: "Our Work with Governments",
    desc: "We work with the government to find solutions for pesky problems in education. We mainstream our Story Pedagogy™ to make learning fun in government schools.",
    date: "July 6 2023",
    read: "2min Read"
  },
  {
    img: assets.blogImage,
    title: "Our Work with Governments",
    desc: "We work with the government to find solutions for pesky problems in education. We mainstream our Story Pedagogy™ to make learning fun in government schools.",
    date: "July 6 2023",
    read: "2min Read"
  }
];

const BlogsSection = ({
  title = "Blogs",
  blogsData = defaultBlogs,
  buttonText = "Read more",
  buttonLink = "/coming-soon",
  showDate = true,
  showDesc = true,
  playIcon = null,
  titleAlign = "text-center"
}) => (
  <section className="max-w-[1500px] mx-auto md:my-[60px] my-[42px]">
    <h2 className={`md:mb-[40px] mb-[24px] ${titleAlign}`}>{title}</h2>
    <div className="flex md:flex-row no-scrollbar overflow-x-auto md:justify-center md:px-[60px] px-[20px] md:gap-[60px] gap-[20px]">
      {blogsData.map((blog, idx) => (
        <div key={idx} className="blog-card flex-1 flex flex-col overflow-hidden bg-white min-w-[280px]">
          <div className="w-full relative">
            <Image
              src={blog.img}
              alt={blog.title}
              unoptimized
              className="w-full h-auto"
              style={{ objectFit: "cover" }}
            />
            {blog.hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                {playIcon ? (
                  playIcon
                ) : (
                  <div className="w-[60px] h-[60px] bg-[#FFEFE5] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 3l14 9-14 9V3z" fill="#E2725B" transform="translate(2, 0)" />
                      <path d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z" fill="#E2725B" stroke="none" />
                    </svg>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="py-[16px] px-[16px]">
            <h3 className="text-[#2C2C2C]  font-semibold md:text-[20px] md:leading-[26px] text-[16px] leading-[20px]" style={{ whiteSpace: "normal" }}>{blog.title}</h3>
            {showDesc && blog.desc && <p className="text-[#6B6B6B] font-normal md:text-[16px] md:leading-[24px] text-[14px] leading-[21px] pt-[4px] pb-[12px]">{blog.desc}</p>}
            {showDate && (
              <div className="flex justify-between items-center font-semibold text-sm">
                <span className="text-[#2C2C2C] font-bold md:text-[16px] text-[14px] md:leading-[24px] leading-[21px]">{blog.date}</span>
                <span>{blog.read}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center md:mt-[40px] mt-[24px]">
      <Link href={buttonLink} className="bg-[#E2725B] rounded-[60px] text-white font-medium md:text-[18px] md:leading-[18px] text-[16px] leading-[16px] py-[10px] px-[20px] flex items-center gap-[10px]">
        {buttonText} <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5001 12.0001H8.5M13.0002 8.5C13.0002 8.5 16.5001 11.0777 16.5001 12C16.5001 12.9224 13.0002 15.5 13.0002 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  </section>
);

export default BlogsSection;
