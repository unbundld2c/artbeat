import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import BlogCard from "@/components/Blogs/BlogCard";
import { getBlogsSummary } from "@/data/blogData";

export default function Blogs() {
    const blogsData = getBlogsSummary();

    return (
        <>
            <Header />
            <div className="min-h-screen bg-white py-[60px]">
                <div className="max-w-[1500px] mx-auto px-[20px] md:px-[60px]">
                    <h1 className="text-center text-[#2C2C2C] font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] mb-[60px]">
                        Blogs
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px]">
                        {blogsData.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                slug={blog.slug}
                                image={blog.image}
                                date={blog.date}
                                readTime={blog.readTime}
                                title={blog.title}
                                description={blog.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

