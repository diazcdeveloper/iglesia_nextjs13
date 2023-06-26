import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fzfcdyjwwvtkfcayipin.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZmNkeWp3d3Z0a2ZjYXlpcGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1NTc5OTEsImV4cCI6MTk4OTEzMzk5MX0.MWlg_uqqTRhNqKzbhbd-pz-a8J2mM_qHtDf_OUb3Hr4'
// const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase 