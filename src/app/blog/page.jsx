import BlogCard from "@/components/blogCard/blogCard";

const blogs = [
  {
    id: 1,
    title: "The Art of Creativity",
    body: "Unlocking the door to creativity is a journey of self-discovery and expression. Embrace the power of imagination as you navigate through the vast landscape of artistic inspiration. From visual arts to written masterpieces, explore the techniques and stories that breathe life into creativity. Discover the profound impact of creativity on personal growth and the world around us, as we delve into the essence of artistic expression.",
    createdAt: new Date(),
    img: "https://picsum.photos/180/240?timestamp=1632767542",
    slug: "the-art-of-creativity",
  },
  {
    id: 2,
    title: "Exploring Diverse Perspectives",
    body: "In a world rich with diverse cultures and perspectives, embark on a journey that celebrates the tapestry of human experience. Dive into thought-provoking narratives that showcase the beauty in our differences. Through stories that challenge preconceptions and broaden horizons, explore the intricate threads that weave the fabric of our interconnected global community. Discover the transformative power of understanding and embracing diverse viewpoints as we navigate the complexities of our multifaceted world.",
    createdAt: new Date(),
    img: "https://picsum.photos/180/240?timestamp=1632767539",
    slug: "exploring-diverse-perspectives",
  },
  {
    id: 3,
    title: "Mastering the Art of Reflection",
    body: "Reflection is a powerful tool on the path to self-discovery and personal growth. Journey through the art of introspection as you delve into stories that illuminate the process of self-reflection. Gain insights into the transformative nature of introspective practices, from journaling to mindfulness. Explore the profound impact of self-awareness on mental well-being and life satisfaction. Join us in mastering the art of reflection and unlocking the doors to a more profound understanding of oneself.",
    createdAt: new Date(),
    img: "https://picsum.photos/180/240?timestamp=1632767540",
    slug: "mastering-the-art-of-reflection",
  },
  {
    id: 4,
    title: "Nature's Symphony",
    body: "Immerse yourself in the harmonious symphony of nature's wonders. From majestic landscapes to the intricate beauty of flora and fauna, explore the breathtaking scenes that nature paints. Dive into narratives that capture the essence of wilderness, highlighting the delicate balance and resilience of ecosystems. Discover the healing power of nature and the profound connection between humanity and the natural world. Join us in celebrating the awe-inspiring beauty that surrounds us, as we journey through the diverse landscapes that make our planet a masterpiece.",
    createdAt: new Date(),
    img: "https://picsum.photos/180/240?timestamp=1632767541",
    slug: "natures-symphony",
  },
];

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {blogs.map((blog) => (
        <div className="w-[30%]" key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
