import { supabase } from "../utils/supabase";
import Link from "next/link";

export default async function Posts() {
    const { data: posts } = await supabase.from('posts').select("id, title");

    if(!posts){
        return <p className="text-2xl ">No posts found.</p>;
    }

    return posts.map((post) => (
        <p key={post.id}>
            <Link href={`/static/${post.id}`}>{post.title}</Link>
        </p>
    ))
}