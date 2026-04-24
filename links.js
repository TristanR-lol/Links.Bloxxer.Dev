import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabase = createClient(process.env.ANON_KEY, process.env.PUBLISHABLE_KEY);

function AddItem(Link) {
    const { data } = await supabase.from("shortlinks").select("id").order("id", { ascending: false }).limit(1);
    const nextId = data[0].id + 1;
    const LID = Math.floor(Math.random() * 10000) + 1;
    await supabase.from("shortlinks").insert({ id: nextId, Link, LID }).then(console.log);
};

AddItem("bloxxer.dev");