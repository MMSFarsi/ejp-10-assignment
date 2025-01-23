import Link from "next/link";

const BlogDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg  mb-6">{post.body}</p>
      <Link href="/" className="btn btn-outline text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default BlogDetails;
