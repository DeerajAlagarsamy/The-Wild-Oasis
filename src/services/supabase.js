import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kdtfjdrgrdpzegzeepkb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdGZqZHJncmRwemVnemVlcGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3MDQ4NDEsImV4cCI6MjAyMjI4MDg0MX0.TsBSYKQmlWLOklfkdBFEAS5_zdZrIVEzXm5nUal1K8A";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
