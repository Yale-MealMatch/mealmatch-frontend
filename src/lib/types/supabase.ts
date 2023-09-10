export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      matches: {
        Row: {
          created_at: string | null
          from_email: string | null
          id: number
          is_sent: boolean
          to_email: string | null
          week: number | null
        }
        Insert: {
          created_at?: string | null
          from_email?: string | null
          id?: number
          is_sent?: boolean
          to_email?: string | null
          week?: number | null
        }
        Update: {
          created_at?: string | null
          from_email?: string | null
          id?: number
          is_sent?: boolean
          to_email?: string | null
          week?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_from_email_fkey"
            columns: ["from_email"]
            referencedRelation: "profiles"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "matches_to_email_fkey"
            columns: ["to_email"]
            referencedRelation: "profiles"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "matches_week_fkey"
            columns: ["week"]
            referencedRelation: "weeks"
            referencedColumns: ["id"]
          }
        ]
      }
      opt_ins: {
        Row: {
          created_at: string | null
          id: number
          phone: string
          week: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          phone: string
          week: number
        }
        Update: {
          created_at?: string | null
          id?: number
          phone?: string
          week?: number
        }
        Relationships: [
          {
            foreignKeyName: "opt_ins_week_fkey"
            columns: ["week"]
            referencedRelation: "weeks"
            referencedColumns: ["id"]
          }
        ]
      }
      opt_ins_sent: {
        Row: {
          created_at: string | null
          id: number
          phone: string | null
          week: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          phone?: string | null
          week?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          phone?: string | null
          week?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "opt_ins_sent_week_fkey"
            columns: ["week"]
            referencedRelation: "weeks"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          bio: string
          email: string
          keywords_match: string
          nickname: string
          opt_in_status: Database["public"]["Enums"]["opt_in_enum"] | null
          phone: string
          pronouns: string
          pronouns_match: string
          signed_confirmation: string[]
          timestamp: string
          year: string
          year_match: string[]
        }
        Insert: {
          bio: string
          email: string
          keywords_match: string
          nickname: string
          opt_in_status?: Database["public"]["Enums"]["opt_in_enum"] | null
          phone: string
          pronouns: string
          pronouns_match: string
          signed_confirmation?: string[]
          timestamp?: string
          year: string
          year_match: string[]
        }
        Update: {
          bio?: string
          email?: string
          keywords_match?: string
          nickname?: string
          opt_in_status?: Database["public"]["Enums"]["opt_in_enum"] | null
          phone?: string
          pronouns?: string
          pronouns_match?: string
          signed_confirmation?: string[]
          timestamp?: string
          year?: string
          year_match?: string[]
        }
        Relationships: []
      }
      reminders: {
        Row: {
          created_at: string | null
          id: number
          message: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          message?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          message?: string | null
        }
        Relationships: []
      }
      responses: {
        Row: {
          confirm: number[] | null
          email: string
          id: number
          keywords: string
          keywords_match: string
          nickname: string
          phone: string
          pronouns: string
          pronouns_match: string
          timestamp: string
          year: number
          year_match: number[]
        }
        Insert: {
          confirm?: number[] | null
          email: string
          id?: number
          keywords: string
          keywords_match: string
          nickname: string
          phone: string
          pronouns: string
          pronouns_match: string
          timestamp?: string
          year: number
          year_match: number[]
        }
        Update: {
          confirm?: number[] | null
          email?: string
          id?: number
          keywords?: string
          keywords_match?: string
          nickname?: string
          phone?: string
          pronouns?: string
          pronouns_match?: string
          timestamp?: string
          year?: number
          year_match?: number[]
        }
        Relationships: []
      }
      weeks: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      view_opt_in_but_no_response: {
        Row: {
          created_at: string | null
          id: number | null
          phone: string | null
          week: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          phone?: string | null
          week?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          phone?: string | null
          week?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "opt_ins_week_fkey"
            columns: ["week"]
            referencedRelation: "weeks"
            referencedColumns: ["id"]
          }
        ]
      }
      view_response_but_no_opt_in: {
        Row: {
          confirm: number[] | null
          email: string | null
          id: number | null
          keywords: string | null
          keywords_match: string | null
          nickname: string | null
          phone: string | null
          pronouns: string | null
          pronouns_match: string | null
          timestamp: string | null
          year: number | null
          year_match: number[] | null
        }
        Insert: {
          confirm?: number[] | null
          email?: string | null
          id?: number | null
          keywords?: string | null
          keywords_match?: string | null
          nickname?: string | null
          phone?: string | null
          pronouns?: string | null
          pronouns_match?: string | null
          timestamp?: string | null
          year?: number | null
          year_match?: number[] | null
        }
        Update: {
          confirm?: number[] | null
          email?: string | null
          id?: number | null
          keywords?: string | null
          keywords_match?: string | null
          nickname?: string | null
          phone?: string | null
          pronouns?: string | null
          pronouns_match?: string | null
          timestamp?: string | null
          year?: number | null
          year_match?: number[] | null
        }
        Relationships: []
      }
      view_response_but_no_opt_in_sent: {
        Row: {
          confirm: number[] | null
          email: string | null
          id: number | null
          keywords: string | null
          keywords_match: string | null
          nickname: string | null
          phone: string | null
          pronouns: string | null
          pronouns_match: string | null
          timestamp: string | null
          year: number | null
          year_match: number[] | null
        }
        Insert: {
          confirm?: number[] | null
          email?: string | null
          id?: number | null
          keywords?: string | null
          keywords_match?: string | null
          nickname?: string | null
          phone?: string | null
          pronouns?: string | null
          pronouns_match?: string | null
          timestamp?: string | null
          year?: number | null
          year_match?: number[] | null
        }
        Update: {
          confirm?: number[] | null
          email?: string | null
          id?: number | null
          keywords?: string | null
          keywords_match?: string | null
          nickname?: string | null
          phone?: string | null
          pronouns?: string | null
          pronouns_match?: string | null
          timestamp?: string | null
          year?: number | null
          year_match?: number[] | null
        }
        Relationships: []
      }
    }
    Functions: {
      reset_opt_ins: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      opt_in_enum: "SENT" | "OPTED_IN" | ""
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
