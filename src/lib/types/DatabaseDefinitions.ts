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
          phone: string
          year: number
          pronouns: string
          timestamp: string
          pronouns_match: string[]
          bio: string
          year_match: number[]
          nickname: string
        }
        Insert: {
          id: string
          phone: string
          year: number
          pronouns: string
          timestamp?: string
          pronouns_match: string[]
          bio: string
          year_match: number[]
          nickname: string
        }
        Update: {
          id?: string
          phone?: string
          year?: number
          pronouns?: string
          timestamp?: string
          pronouns_match?: string[]
          bio?: string
          year_match?: number[]
          nickname?: string
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
