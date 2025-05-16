import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vdetvdkaahmcbklyrdfq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZXR2ZGthYWhtY2JrbHlyZGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NTI0OTYsImV4cCI6MjA2MTIyODQ5Nn0.n2Cwj1kIYp0drNscsFrHCoEtqpN5bDDyNm3rLR_E90M
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
