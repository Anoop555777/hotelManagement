import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sfzhqxiipwnwfsoaateg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmemhxeGlpcHdud2Zzb2FhdGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyNDA0NjcsImV4cCI6MjAwMzgxNjQ2N30.wIj7KY1Aab-x0-m_Nk6VcZOqEijx0MLde6AkRSH2fmk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
