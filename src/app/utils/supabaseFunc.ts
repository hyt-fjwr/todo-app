import { supabase } from "../utils/supabase";

export const getAll =async () => {
    const data = await supabase.from("TODOs").select("*");
    return data;
}