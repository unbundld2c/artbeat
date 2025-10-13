import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const blogs = [
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

const BlogsSection = () => (
  <section className="max-w-[1500px] mx-auto md:my-[60px] my-[42px]">
    <h2 className="md:mb-[40px] mb-[24px] text-center">Blogs</h2>
    <div className="flex  md:flex-row no-scrollbar overflow-x-auto md:justify-center md:px-[60px] px-[20px] md:gap-[60px] gap-[20px]">
      {blogs.map((blog, idx) => (
        <div key={idx} className="blog-card flex-1 flex flex-col overflow-hidden bg-white">
          <div className="w-full">
            <Image
              src={blog.img}
              alt={blog.title}
              unoptimized
              objectFit="cover"
            />
          </div>
          <div className="py-[16px] px-[16px]">
            <h3 className="text-[#2C2C2C] font-semibold md:text-[20px] md:leading-[26px] text-[16px] leading-[20px]">{blog.title}</h3>
            <p className="text-[#6B6B6B] font-normal md:text-[16px] md:leading-[24px] text-[14px] leading-[21px] pt-[4px] pb-[12px]">{blog.desc}</p>
            <div className="flex justify-between items-center font-semibold text-sm">
              <span className="text-[#2C2C2C] font-bold md:text-[16px] text-[14px] md:leading-[24px] leading-[21px]">{blog.date}</span>
              <span>{blog.read}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center md:mt-[40px] mt-[24px]">
      <Link href="/coming-soon" className="bg-[#E2725B] rounded-[60px] text-white font-medium md:text-[18px] md:leading-[18px] text-[16px] leading-[16px] py-[10px] px-[20px] flex items-center gap-[10px]">
        Read more <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5001 12.0001H8.5M13.0002 8.5C13.0002 8.5 16.5001 11.0777 16.5001 12C16.5001 12.9224 13.0002 15.5 13.0002 15.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </Link>
    </div>
  </section>
);

export default BlogsSection;
