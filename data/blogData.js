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
    title: "Agency Over Pity: My Visit to ASHA School",
    date: "March 15, 2026",
    image: assets.agencyOverPity,
    description: "It has been a while since I’ve been consumed by a singular thought: how to do something for children without making it about myself.",
    content: [
      {
        type: "paragraph",
        text: "It has been a while since I’ve been consumed by a singular thought: how to do something for children without making it about myself."
      },
      {
        type: "paragraph",
        text: "While the very foundation of <b>Artbeat</b> is rooted in my personal journey—my experiences learning, healing, and navigating life—my goal for this visit was different. I wanted to understand how to give agency back to the children."
      },
      {
        type: "paragraph",
        text: "I recently invited a musician friend to join me. She declined, admitting she couldn't gather the courage to disassociate emotionally; she feared being heartbroken by the sight of children with severe autism. I asked myself then: <i>Could I do it? Could I look without breaking?</i>"
      },
      {
        type: "paragraph",
        text: "I realized I could. Not because these children don’t need support, but because <b>they do not need to be rescued.</b> When given a space to thrive, they aren't \"cases\" or \"disabilities\"—they are individuals with jokes to share, songs to sing, and boundaries to set."
      },
      {
        type: "heading",
        text: "The Observers and the Explorers"
      },
      {
        type: "paragraph",
        text: "I wasn't formally introduced to the students, only the teachers. This created a fascinating dynamic where I became the object of their curiosity:"
      },
      {
        type: "list",
        items: [
          "<b>Deepika</b> was the disciplined, silent observer. While focused on her task, she watched me with a quiet intensity, trying to decode who I was and what I was jotting down.",
          "<b>Ashwin</b> was her energetic contrast. He finished his work with lightning speed just to stand by my side, his presence a silent question: <i>\"What are you doing?\"</i>",
          "<b>Monica</b> carried a glint of mischief. She wasn’t interested in my notes; she was interested in me. She wore a knowing smile all morning that erupted into a hearty laugh at lunch. Usually, a stranger laughing might make one feel self-conscious, but with Monica, I felt invited. I was finally in on the joke."
        ]
      },
      {
        type: "heading",
        text: "The Music of Communication"
      },
      {
        type: "paragraph",
        text: "Lunch began with a prayer sung in perfect tune, a moment that solidified my hope: music is the ultimate tool for self-expression here."
      },
      {
        type: "paragraph",
        text: "I watched one boy call for his teacher using a single, clear note, then request a spoon with another strong, resonant tone. He lifted his hand like a classical maestro, acknowledging the power and sanctity of the sound. I wondered—is he singing his feelings out the same way I do?"
      },
      {
        type: "paragraph",
        text: "Later, I felt a presence beside me. A boy was staring, and assuming he wanted to sit, I scooted over. He didn't budge. Somehow, instinctively, I realized I wasn't just in his way—I was in his place."
      },
      {
        type: "paragraph",
        text: "As I apologized and stood up, he slid into his rightful seat. His teacher mentioned he sits there every day. I felt a surge of pride in that moment, not for myself, but for him. He had exhibited agency and set a firm, polite boundary—a skill so many \"typical\" adults struggle with."
      },
      {
        type: "paragraph",
        text: "ASHA doesn't feel like a place of struggle; it feels like a <b>safe space.</b> These children don't need us to save them; they need the world to provide the space for them to simply be."
      },
      {
        type: "paragraph",
        text: "I am hoping with all my heart that Artbeat can become a part of this wonderful ecosystem, allowing music to exist in even more ways than it already does."
      }
    ]
  },
  {
    id: 2,
    slug: "power-of-storytelling-in-learning",
    title: "Finding the light in the dark corners",
    date: "March 12, 2026",
    image: assets.findingLight,
    description: "It’s a strange irony to be a slow processor with an impulsive streak. I’ve always needed time to truly understand things, to let them settle before I form a response.",
    content: [
      {
        type: "paragraph",
        text: "It’s a strange irony to be a slow processor with an impulsive streak. I’ve always needed time to truly understand things, to let them settle before I form a response. Yet, my first instinct is often to react immediately—a trait I’ve worked so hard to change, because I’d much rather respond with thought than simply react on impulse."
      },
      {
        type: "paragraph",
        text: "Perhaps that's why I never found my footing in the pages of a book. I wasn't an avid reader or a natural wordsmith. My sanctuary was music. A song, I realized, wasn’t a single story; it was a universe of them, with as many interpretations as there were listeners. It opened a world of ideas that I could explore at my own pace."
      },
      {
        type: "paragraph",
        text: "I still listen to the same songs on repeat, not just because I love them, but because of the new layers I discover each time. Music was the first thing I could truly focus on. This process of deep listening became my method for learning everything else. My good grades in school weren't due to natural talent but to brute force: I would read, re-read, and read again, hoping the information would stick. And yet, so much of it would fade."
      },
      {
        type: "paragraph",
        text: "The things that stayed were the things I loved. I can still remember the first classical song I learned in October 1991, nearly 34 years ago. It remains with me because it mattered."
      },
      {
        type: "paragraph",
        text: "In life, I’ve often wished for a signpost, a <b>mile marker</b>, a clear <b>sign that</b> says, \"Rest here. Process. Articulate before you proceed.\" Music became that space for me. It grounded me through heartbreak, stress, and confusion, offering a quiet corner to make sense of the noise. And in that process, I discovered that you are never alone in what you think or feel. The moment you find the courage to articulate it, you discover others who understand."
      },
      {
        type: "paragraph",
        text: "So now I wonder, can I take my journey of finding solace in sound and use it to build that space for others? Can I help create music that illuminates their darkest corners?"
      }
    ]
  },
  {
    id: 3,
    slug: "building-resilient-communities",
    title: "From \"Slow Progress\" to Soulful Purpose",
    date: "March 10, 2026",
    image: assets.fromSlowProgress,
    description: "As I walked up the steps of ASHA recently, a \"Thought of the Day\" caught my eye: \"Slow progress is better than no progress.\"",
    content: [
      {
        type: "paragraph",
        text: "As I walked up the steps of ASHA recently, a \"Thought of the Day\" caught my eye: <b>\"Slow progress is better than no progress.\" </b> I felt a sudden pang of recognition. For over a decade, I’ve wrestled with a singular question: <i>What do I do with my inclination toward music?</i> I cycled through the options—performing, teaching, picking up new instruments—doing a bit of everything before finally arriving at the doorstep of Artbeat."
      },
      {
        type: "heading",
        text: "Starting Over in a World of Unicorns"
      },
      {
        type: "paragraph",
        text: "Starting a new venture in your 40s is a quiet act of rebellion. I am surrounded by a world where twenty-somethings are busy building \"unicorns,\" and here I am, launching my second act. My first company still exists, but it drifted away from the direction I intended, leaving me to start over."
      },
      {
        type: "paragraph",
        text: "I’ve always had an impulsive streak, but this journey has forced me to be slow and steady. During those \"slow\" years, I didn't just wait; I learned. My time in the education space introduced me to stellar, inspiring mentors. From them, I absorbed the values I needed to build something sturdy and sustainable."
      },
      {
        type: "heading",
        text: "The Birth of Artbeat and Aaroh"
      },
      {
        type: "paragraph",
        text: "Artbeat is the culmination of that decade of wandering. Through our music-based pedagogy, <b>Aaroh</b>, I want to help children navigate a question that is often ignored: <i>What is your personal relationship with art?</i>"
      },
      {
        type: "paragraph",
        text: "Before we ask if a child wants to pursue art for a living, we must ask how it serves their soul. For me, music was everything—it soothed, saved, and salvaged me. Our programs are structured to help children \"reflect in action.\" We use art as a non-verbal tool, but we want the child to validate that through their own lived experience. Even if a child says, \"No, this doesn't help me,\" that honesty is a giant leap forward."
      },
      {
        type: "heading",
        text: "Breaking the Box"
      },
      {
        type: "paragraph",
        text: "We spend years telling children to stay inside the box:"
      },
      {
        type: "list",
        items: [
          "Abide by the rules.",
          "Be the \"all-rounder\" model student.",
          "Study, study, study."
        ]
      },
      {
        type: "paragraph",
        text: "And then, the moment they hit adulthood, the world demands they \"think outside the box.\" How can we expect them to find an exit they were never allowed to look for?"
      },
      {
        type: "paragraph",
        text: "Creative arts allow a child to dream of the world outside that box—and more importantly, to shape it. With Artbeat, that is exactly what I intend to achieve."
      }
    ]
  },
  {
    id: 4,
    slug: "art-integration-new-paradigm",
    title: "The Blue Coconuts of Kalyani: When the Student Becomes the Raga",
    date: "March 5, 2026",
    image: assets.blueCoconuts,
    description: "I have always navigated music through the architecture of the raga rather than the divinity of the lyrics.",
    content: [
      {
        type: "paragraph",
        text: "I have always navigated music through the architecture of the raga rather than the divinity of the lyrics. When I sing <i>Kamalajadala</i>, a beautiful composition in Raga Kalyani (or Yaman), my mind doesn’t immediately go to the heavens. I don’t feel the weight of the Sanskrit praises for Lord Krishna; instead, I feel the soaring highs and the grounding lows."
      },
      {
        type: "paragraph",
        text: "Admittedly, I have a soft spot for the lyrics for a very \"corny\" reason: the reference to \"lotus-like eyes\" reminds me of my husband, whose name means Lotus. To me, Kalyani has always been the sound of romance. It’s the yearning in <i>Abhi Na Jao Chodkar</i>—my absolute favorite—or the cool breeze of a setting sun- <i>Jab deep jale aana</i> (Chitchor)."
      },
      {
        type: "paragraph",
        text: "But last week, my student Ishwarya taught me that my version of \"feeling\" isn’t the only map to a raga."
      },
      {
        type: "paragraph",
        text: "Ishwarya is fifteen. She is quiet, observant, and uses the creative arts as her primary outlet to the world. We were struggling with the \"feel\" of Kalyani. I tried everything. I explained its usage in Bollywood; we listened to <i>Kesariya (her favourite song based on raag kalyani)</i> on loop; we talked about love and longing. Nothing clicked. Finally, she looked at me and said simply, <b>\"I haven’t experienced love like that.\"</b>"
      },
      {
        type: "paragraph",
        text: "It was a reality check. How do you teach the \"flavor\" of a raga to someone who hasn't yet tasted the emotion you’re describing?"
      },
      {
        type: "paragraph",
        text: "I told her to go home, grab her colors, and come back. The next session, I didn't lecture. I simply played a loop of Kalyani-based songs and told her to draw. She immediately went to work, her hands moving with a certainty that her voice hadn't yet found."
      },
      {
        type: "paragraph",
        text: "When she finished, she presented a painting that changed how I will hear this raga forever. She pointed to blue, rounded shapes."
      },
      {
        type: "paragraph",
        text: "<i>\"These blue 'coconuts' represent the melancholy in Kalyani,\" she explained. \"It has heavy weight, so it's prominent. The warm tones in the back—the reds and oranges—are the varieties of love and longing. And the green? That’s the progression of the melody.\"</i>"
      },
      {
        type: "paragraph",
        text: "Then she pointed to a lamp in the background. <b>\"The lamp represents a warm hug. That’s what I felt while listening.\"</b>"
      },
      {
        type: "paragraph",
        text: "I sat there, floored. I have studied music for years, but I have never heard a more profound explanation of a raga. To her, Kalyani wasn’t a romantic hero or a deity; it was a complex \"orchestra\" of melancholy weighted by a warm hug."
      },
      {
        type: "paragraph",
        text: "This is the power of a student-centered, multidisciplinary approach. When we stop demanding that a child sees the world through our lens, they invite us into theirs. Ishwarya didn't just learn a raga that day; she redefined it for me. She reminded me that every child has an inner world waiting for a medium—whether it's a paintbrush or a Tanpura—to let the light out."
      },
      {
        type: "paragraph",
        text: "Kalyani is no longer just \"lotus eyes\" and old film songs to me. It’s now also a blue coconut and a warm hug."
      }
    ]
  },
  {
    id: 5,
    slug: "measuring-impact-journey",
    title: "The Philosophy of Zero",
    date: "March 1, 2026",
    image: assets.philosophyOfZero,
    description: "We invented zero for a reason—and it wasn't just to fill a space.",
    content: [
      {
        type: "paragraph",
        text: "Growing up, I was a \"good student,\" mostly because I lived in dread of the red ink. Those circles on my answer sheet felt like scars. For a while, I successfully chased the absence of those marks to please my parents and myself. But as life grew complex, so did I. I got lost trying to decide who I was supposed to be: the topper, the popular kid, the funny one? In the confusion of trying to be everything, I began to lose my grip."
      },
      {
        type: "paragraph",
        text: "The red marks returned, and with them came my father’s frequent warning: \"<b>You’re going to hit zero soon.</b>\""
      },
      {
        type: "paragraph",
        text: "As I sat with the weight of that failure, my brother said something that shifted my entire world: \"<i>You know, 0% is still something, right?</i>\""
      },
      {
        type: "paragraph",
        text: "That thought became my anchor. It didn't magically fix my grades, but it gave me permission to stop fighting things I couldn't control. I stopped desperately trying to love subjects I hated. By accepting what I <i>wasn't</i>, I finally discovered what I <i>was</i>. Zero wasn’t a vacuum; it was the solid floor that allowed me to build a world of a manageable, honest size."
      },
      {
        type: "heading",
        text: "Why We Start at Lesson 0"
      },
      {
        type: "paragraph",
        text: "At <b>Artbeat</b>, we don't start with Lesson 1. We start with <b>Lesson 0</b>."
      },
      {
        type: "paragraph",
        text: "In the world of education and social impact, there is a frantic rush for \"results\"—the blue ink on the page. Everyone wants to see the program in action immediately. But Lesson 1 without Lesson 0 is just noise."
      },
      {
        type: "paragraph",
        text: "<b>Lesson 0 is about:</b>"
      },
      {
        type: "list",
        items: [
          "<b>The Context:</b> Understanding the silence and stillness before the work begins.",
          "<b>The Stakeholders:</b> We don't just look at the child; we look at the parents, the teachers, and the environment that holds them.",
          "<b>The Baseline:</b> Without a true zero, you cannot measure growth."
        ]
      },
      {
        type: "paragraph",
        text: "Before we teach music (<b>Aaroh</b>), play (<b>Anand</b>), or writing (<b>Akshar</b>), we must honor the silence that precedes them."
      },
      {
        type: "heading",
        text: "The Courage to be at Zero"
      },
      {
        type: "paragraph",
        text: "Artbeat existed at \"zero\" for a long time before we officially registered. Those years in the social sector weren't wasted; they were the \"Lesson 0\" that added nuance to my vision. I realized that if I wanted this to be a Section 8 foundation that actually changes lives, I couldn't be afraid of the \"red marks\" of the real world—the critiques, the failures, and the data."
      },
      {
        type: "paragraph",
        text: "This philosophy drives our design. In our world:"
      },
      {
        type: "list",
        items: [
          "A child who gives no response is still communicating.",
          "A space with no sound speaks volumes.",
          "A community where you hear \"nothing\"—whether from stillness or chaos—is telling you exactly where to start."
        ]
      },
      {
        type: "paragraph",
        text: "Can we all take a moment to just listen? My brother was right: <b>Zero is something.</b> In fact, it’s the only place where you can truly begin."
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
