import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iqnqhlmfshwervetflai.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbnFobG1mc2h3ZXJ2ZXRmbGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MTM5NTIsImV4cCI6MjAzODE4OTk1Mn0.DSEVJ8lDuuzHWBusl0-cQrM28C3InFTaUjD7h-Ek-YQ'
export const supabase = createClient(supabaseUrl, supabaseKey)