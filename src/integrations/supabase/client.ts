// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kydubolzvsqkberbxvsh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5ZHVib2x6dnNxa2JlcmJ4dnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NzkxNDYsImV4cCI6MjA1ODA1NTE0Nn0.wui59Fwe5AromE6UVR2OyOHM_3N-cwLZlt2Z_hIa6iI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);