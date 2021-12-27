import { createClient } from "@supabase/supabase-js";

export const db = createClient(
  process.env["SUPABASE_URL"],
  process.env["SUPABASE_KEY"]
);

export type RecordSchema = {
  artist: string;
  cover_image: string;
  date_added: string;
  resource_id: number;
  title: string;
  video_id?: string;
  year: number;
};

export async function getRecords() {
  const { data, error } = await db
    .from<RecordSchema>("records")
    .select()
    .order("date_added", { ascending: false });

  if (error) throw error;

  return data as RecordSchema[];
}
