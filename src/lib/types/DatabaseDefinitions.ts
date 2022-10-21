export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      responses: {
        Row: {
          id: string
          pronouns_match: string[] | null
          year: number | null
          year_match: number[] | null
          pronouns: string | null
          timestamp: string | null
          phone: string | null
          bio: string | null
          nickname: string | null
        }
        Insert: {
          id: string
          pronouns_match?: string[] | null
          year?: number | null
          year_match?: number[] | null
          pronouns?: string | null
          timestamp?: string | null
          phone?: string | null
          bio?: string | null
          nickname?: string | null
        }
        Update: {
          id?: string
          pronouns_match?: string[] | null
          year?: number | null
          year_match?: number[] | null
          pronouns?: string | null
          timestamp?: string | null
          phone?: string | null
          bio?: string | null
          nickname?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
