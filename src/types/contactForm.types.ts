export interface ContactMessage {
    id?: string;
    name: string;
    email: string;
    message: string;
    created_at: string;
    is_read: boolean;
}

export interface ContactMessagesDatabase {
    __InternalSupabase: {
        PostgrestVersion: "12";
    };
    public: {
        Tables: {
            contact_messages: {
                Row: {
                    id: string;
                    name: string;
                    email: string;
                    message: string;
                    created_at: string;
                    is_read: boolean;
                };
                Insert: {
                    id?: string;
                    name: string;
                    email: string;
                    message: string;
                    created_at?: string;
                    is_read?: boolean;
                };
                Update: {
                    id?: string;
                    name?: string;
                    email?: string;
                    message?: string;
                    created_at?: string;
                    is_read?: boolean;
                };
                Relationships: [];
            };
        };
        Views: { [_ in never]: never };
        Functions: { [_ in never]: never };
        Enums: { [_ in never]: never };
        CompositeTypes: { [_ in never]: never };
    };
}