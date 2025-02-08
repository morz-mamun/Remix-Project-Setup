import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader =  async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  
  return json({blogs: data});
}

export default function Index() {
  const {blogs} = useLoaderData();
  console.log(blogs);
  
  return (
   <div>
    <h1>Welcome to Remix App</h1>
   </div>
  );
}

