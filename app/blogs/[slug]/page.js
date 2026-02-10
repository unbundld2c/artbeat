import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import { getBlogBySlug, getAllBlogSlugs } from "@/data/blogData";
import BlogsSection from "@/components/Home/BlogsSection";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const slugs = getAllBlogSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-white py-[40px] md:py-[60px]">
                <article className="max-w-[1320px] mx-auto px-[20px] md:px-[40px]">
                    <h1 className="text-center text-[#2C2C2C] font-medium text-[28px] md:text-[48px] leading-[120%] mb-[8px]">
                        {blog.title}
                    </h1>

                    <div className="flex items-center text-[#2C2C2C] justify-center gap-[8px] mb-[24px]">
                        <span className="font-normal text-[14px] md:text-[16px] leading-[100%]">
                            {blog.date}
                        </span>
                        <span className="font-bold text-[16px] md:text-[18px] leading-none">
                            •
                        </span>
                        <span className="font-normal text-[14px] md:text-[16px] leading-[100%]">
                            {blog.readTime}
                        </span>
                    </div>

                    <p className="text-center text-[#2C2C2C] font-normal text-[16px] md:text-[18px] leading-[140%] mb-[40px] max-w-[700px] mx-auto">
                        {blog.subtitle}
                    </p>

                    <div className="w-full aspect-[18/9] relative overflow-hidden rounded-[16px] mb-[40px]">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            unoptimized
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {blog.content.map((section, index) => {
                        switch (section.type) {
                            case "heading":
                                return (
                                    <h3
                                        key={index}
                                        className="text-[#2C2C2C] font-semibold text-[20px] md:text-[28px] leading-[120%] mt-[24px] md:mt-[48px] mb-[12px] md:mb-[16px] !whitespace-normal"
                                    >
                                        {section.text}
                                    </h3>
                                );
                            case "paragraph":
                                return (
                                    <p
                                        key={index}
                                        className="text-[#2C2C2C] font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-[16px] md:mb-[24px]"
                                    >
                                        {section.text}
                                    </p>
                                );
                            case "image":
                                return (
                                    <div
                                        key={index}
                                        className="w-full aspect-[18/9] relative overflow-hidden rounded-[12px] my-[40px]"
                                    >
                                        <Image
                                            src={section.src}
                                            alt={section.alt}
                                            unoptimized
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </article>

                {/* Related Blogs Section */}
                <BlogsSection
                    title="Related Blogs"
                    maxBlogs={3}
                />
            </div>
            <Footer />
        </>
    );
}
