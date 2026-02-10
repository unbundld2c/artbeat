import { assets } from "@/Assets/assets";

const calculateReadTime = (blog) => {
    let wordCount = 0;

    wordCount += blog.title.split(/\s+/).length;
    if (blog.subtitle) {
        wordCount += blog.subtitle.split(/\s+/).length;
    }

    if (blog.description) {
        wordCount += blog.description.split(/\s+/).length;
    }

    if (blog.content && Array.isArray(blog.content)) {
        blog.content.forEach(section => {
            if (section.text) {
                wordCount += section.text.split(/\s+/).length;
            }
        });
    }

    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
};

export const blogsData = [
    {
        id: 1,
        slug: "transforming-education-through-creative-arts",
        title: "Transforming Education Through Creative Arts",
        subtitle: "Discover how our Story Pedagogy™ is revolutionizing the way children learn in government schools across India.",
        date: "February 10, 2026",
        image: assets.blogImage,
        description: "Discover how our Story Pedagogy™ is revolutionizing the way children learn in government schools across India. We explore the impact of integrating creative arts into traditional curriculum and the remarkable outcomes we've witnessed.",
        content: [
            {
                type: "paragraph",
                text: "Education in India is undergoing a remarkable transformation. At the heart of this change is our innovative Story Pedagogy™ approach, which integrates creative arts into the traditional curriculum to make learning more engaging, memorable, and effective for students across government schools."
            },
            {
                type: "heading",
                text: "The Challenge We Addressed"
            },
            {
                type: "paragraph",
                text: "Traditional teaching methods often struggle to engage students, particularly in resource-constrained government schools. Children learn best when they're actively involved and emotionally connected to the content. Our Story Pedagogy™ addresses this gap by weaving storytelling, visual arts, music, and drama into everyday lessons."
            },
            {
                type: "heading",
                text: "How Story Pedagogy™ Works"
            },
            {
                type: "paragraph",
                text: "Our methodology transforms abstract concepts into tangible, relatable stories. For instance, a mathematics lesson on fractions becomes a story about sharing food equally among friends. A science concept about photosynthesis is illustrated through a dramatic performance where students play the roles of the sun, water, and leaves."
            },
            {
                type: "paragraph",
                text: "This approach activates multiple learning pathways in the brain, making information easier to understand and retain. Students don't just memorize facts—they experience them, embody them, and create meaningful connections that last."
            },
            {
                type: "heading",
                text: "The Impact We've Seen"
            },
            {
                type: "paragraph",
                text: "Since implementing Story Pedagogy™ across multiple states, we've witnessed transformative outcomes. Student engagement has increased dramatically, with teachers reporting higher participation rates and improved classroom dynamics. More importantly, learning outcomes have improved significantly, with students demonstrating better comprehension and retention of concepts."
            },
            {
                type: "paragraph",
                text: "Beyond academic achievements, we've observed students developing critical skills like creativity, collaboration, and confidence. These are the skills that will serve them throughout their lives, far beyond the classroom walls."
            }
        ]
    },
    {
        id: 2,
        slug: "power-of-storytelling-in-learning",
        title: "The Power of Storytelling in Learning",
        subtitle: "Stories have the unique ability to captivate young minds and make complex concepts more accessible.",
        date: "January 28, 2026",
        image: assets.blogImage,
        description: "Stories have the unique ability to captivate young minds and make complex concepts more accessible. Learn about our innovative approach to using storytelling as a powerful educational tool in classrooms.",
        content: [
            {
                type: "paragraph",
                text: "From ancient civilizations to modern classrooms, storytelling has been humanity's most enduring teaching tool. Stories engage our emotions, spark our imagination, and help us make sense of complex ideas. At our organization, we've harnessed this timeless power to transform education."
            },
            {
                type: "heading",
                text: "Why Stories Matter in Education"
            },
            {
                type: "paragraph",
                text: "Research shows that our brains are wired for stories. When we hear a story, multiple areas of our brain activate—not just the language processing centers, but also the sensory and motor cortices. This means stories create richer, more memorable learning experiences than traditional lecture-based teaching."
            },
            {
                type: "heading",
                text: "Implementing Storytelling in Curriculum"
            },
            {
                type: "paragraph",
                text: "We've developed comprehensive training programs for teachers, equipping them with storytelling techniques specifically designed for different subjects and age groups. Our approach is practical and adaptable, ensuring that even teachers with limited resources can implement these methods effectively."
            },
            {
                type: "paragraph",
                text: "The results speak for themselves. Students who were previously disengaged are now active participants in their learning journey. Complex topics that once seemed insurmountable now feel accessible and interesting. This is the transformative power of storytelling in education."
            }
        ]
    },
    {
        id: 3,
        slug: "building-resilient-communities",
        title: "Building Resilient Communities Through Education",
        subtitle: "Education is more than just academics—it's about building strong, resilient communities.",
        date: "January 15, 2026",
        image: assets.blogImage,
        description: "Education is more than just academics—it's about building strong, resilient communities. Read about our community engagement programs and how we're empowering students, teachers, and parents alike.",
        content: [
            {
                type: "paragraph",
                text: "True educational transformation extends beyond classroom walls. When we invest in education, we're investing in entire communities. Our programs recognize this interconnected reality and work to strengthen the entire educational ecosystem."
            },
            {
                type: "heading",
                text: "A Holistic Approach to Education"
            },
            {
                type: "paragraph",
                text: "We believe that sustainable change requires engaging all stakeholders—students, teachers, parents, and community leaders. Our programs include teacher training, parent workshops, and community events that celebrate learning and creativity."
            },
            {
                type: "heading",
                text: "Empowering Teachers as Change Agents"
            },
            {
                type: "paragraph",
                text: "Teachers are at the heart of our approach. We provide comprehensive professional development, ongoing mentorship, and a supportive community of practice. When teachers feel empowered and supported, they become powerful agents of change in their schools and communities."
            },
            {
                type: "heading",
                text: "Engaging Parents and Communities"
            },
            {
                type: "paragraph",
                text: "We've learned that parent engagement is crucial for student success. Our programs include workshops that help parents understand how they can support their children's learning at home, even with limited formal education themselves. These sessions build bridges between school and home, creating a consistent support system for students."
            },
            {
                type: "paragraph",
                text: "The ripple effects of this community-centered approach are profound. Schools become community hubs, parents become advocates for education, and students see learning valued not just in school but throughout their entire community."
            }
        ]
    },
    {
        id: 4,
        slug: "art-integration-new-paradigm",
        title: "Art Integration: A New Paradigm in Learning",
        subtitle: "Art integration goes beyond traditional art classes, weaving creativity into every subject.",
        date: "December 22, 2025",
        image: assets.blogImage,
        description: "Art integration goes beyond traditional art classes. Explore how we incorporate visual arts, music, and drama into subjects like mathematics, science, and language to create holistic learning experiences.",
        content: [
            {
                type: "paragraph",
                text: "Art integration represents a fundamental shift in how we approach education. Instead of treating arts as separate subjects confined to occasional art classes, we integrate artistic processes into all areas of learning, creating rich, multidimensional educational experiences."
            },
            {
                type: "heading",
                text: "What is Art Integration?"
            },
            {
                type: "paragraph",
                text: "Art integration means using the arts—visual arts, music, drama, dance—as pathways to learning academic content. It's not about adding art to lessons as decoration, but using artistic processes to help students understand and demonstrate their learning in new ways."
            },
            {
                type: "heading",
                text: "Cross-Curricular Connections"
            },
            {
                type: "paragraph",
                text: "In our classrooms, students might create geometric art to understand mathematical patterns, compose songs to remember historical events, or perform skits to explore scientific processes. These creative approaches make abstract concepts concrete and memorable."
            },
            {
                type: "paragraph",
                text: "The beauty of art integration is that it honors different learning styles. While some students thrive with traditional text-based learning, others excel when they can move, create, or perform. Art integration ensures that every student has pathways to success."
            },
            {
                type: "heading",
                text: "Developing 21st Century Skills"
            },
            {
                type: "paragraph",
                text: "Beyond academic content, art integration develops crucial skills for the 21st century: creativity, critical thinking, collaboration, and communication. These are the skills that will help students navigate an increasingly complex and rapidly changing world."
            }
        ]
    },
    {
        id: 5,
        slug: "measuring-impact-journey",
        title: "Measuring Impact: Our Journey So Far",
        subtitle: "Over the years, we've impacted thousands of students across multiple states.",
        date: "December 10, 2025",
        image: assets.blogImage,
        description: "Over the years, we've impacted thousands of students across multiple states. Dive into our data-driven insights and success stories that showcase the transformative power of our programs in action.",
        content: [
            {
                type: "paragraph",
                text: "As we reflect on our journey, we're proud to share the measurable impact our programs have created across government schools in India. These aren't just numbers—they represent real students whose lives have been transformed through better educational experiences."
            },
            {
                type: "heading",
                text: "Our Reach and Scale"
            },
            {
                type: "paragraph",
                text: "We've partnered with government schools across multiple states, reaching over 50,000 students directly and touching the lives of countless more through teacher training and community programs. Our programs span urban, semi-urban, and rural contexts, ensuring that quality creative education reaches children regardless of their geographic location."
            },
            {
                type: "heading",
                text: "Quantitative Outcomes"
            },
            {
                type: "paragraph",
                text: "Independent evaluations of our programs have shown significant improvements in learning outcomes. Students in our programs demonstrate 30% higher engagement rates, 25% improvement in subject comprehension, and notable gains in creative thinking skills compared to baseline measurements."
            },
            {
                type: "paragraph",
                text: "Teachers trained in our methodology report increased job satisfaction and confidence in their teaching abilities. Over 85% of trained teachers continue to use our methods even after formal program support ends, demonstrating the sustainability of our approach."
            },
            {
                type: "heading",
                text: "Qualitative Impact Stories"
            },
            {
                type: "paragraph",
                text: "Beyond numbers, the stories from our classrooms inspire us daily. We've seen shy students find their voice through drama, struggling learners grasp difficult concepts through art, and entire school cultures transform to become more joyful, creative spaces."
            },
            {
                type: "paragraph",
                text: "As we look ahead, we're committed to expanding our reach while deepening our impact. We continue to innovate, learn, and refine our approaches, always keeping the children we serve at the center of our work."
            }
        ]
    }
];

export const getBlogsSummary = () => {
    return blogsData.map(blog => ({
        id: blog.id,
        slug: blog.slug,
        title: blog.title,
        date: blog.date,
        readTime: calculateReadTime(blog),
        image: blog.image,
        description: blog.description
    }));
};

export const getBlogBySlug = (slug) => {
    const blog = blogsData.find(blog => blog.slug === slug);
    if (blog) {
        return {
            ...blog,
            readTime: calculateReadTime(blog)
        };
    }
    return blog;
};

export const getAllBlogSlugs = () => {
    return blogsData.map(blog => blog.slug);
};
