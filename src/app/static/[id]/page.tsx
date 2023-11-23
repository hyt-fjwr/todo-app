import { notFound } from "next/navigation";
import { supabase } from "../../utils/supabase";


export async function generateStaticParams(){
    const { data: posts } = await supabase.from('post').select('id');

    return posts?.map(({id}) => 
    ({
        id
    }));
}

export default async function Post({
    params : { id : string }
}) {
    const { data : posts } = await supabase
    .from("posts")
    .select()
    .match({id})
    .single

    if(!posts){
        notFound();
    }

    return <pre>{JSON.stringify(posts, null, )} </pre>
}