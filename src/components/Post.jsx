import Link from "next/link";

const Post = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline" > {post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
