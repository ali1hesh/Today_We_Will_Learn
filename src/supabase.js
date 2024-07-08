import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vqjkeuvmttmgemsjwelh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxamtldXZtdHRtZ2Vtc2p3ZWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMzMwMzcsImV4cCI6MjAzMzYwOTAzN30.0VwMmqT_h_dYDI30Lv2mdWTr-kK71VoAuO0_ZvTX6hw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
