import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}


import useFetch from "../Hooks/useFetch";

export default function PostsPage() {
  const { data: posts, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 space-y-4">
      {posts.slice(0, 10).map(post => (
        <div key={post.id} className="p-4 border rounded">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
