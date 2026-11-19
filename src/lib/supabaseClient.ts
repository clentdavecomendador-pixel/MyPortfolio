import { createClient, type SupabaseClient } from "@supabase/supabase-js"
import type { ContactMessagesDatabase } from "../types/contactForm.types"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

let supabaseClient: SupabaseClient<ContactMessagesDatabase> | undefined

export const getSupabaseClient = () => {
    if (!supabaseUrl || !supabaseKey) {
        throw new Error(
            "Supabase configuration is missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY."
        )
    }

    if (!supabaseClient) {
        supabaseClient = createClient<ContactMessagesDatabase>(supabaseUrl, supabaseKey)
    }

    return supabaseClient
}