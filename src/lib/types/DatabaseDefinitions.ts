export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			profiles: {
				Row: {
					id: string;
					timestamp: string | null;
					year: number | null;
					year_match: number[] | null;
					pronouns: string | null;
					pronouns_match: string[] | null;
					phone: string | null;
					nickname: string | null;
					bio: string | null;
					email: string | null;
				};
				Insert: {
					id: string;
					timestamp?: string | null;
					year?: number | null;
					year_match?: number[] | null;
					pronouns?: string | null;
					pronouns_match?: string[] | null;
					phone?: string | null;
					nickname?: string | null;
					bio?: string | null;
					email?: string | null;
				};
				Update: {
					id?: string;
					timestamp?: string | null;
					year?: number | null;
					year_match?: number[] | null;
					pronouns?: string | null;
					pronouns_match?: string[] | null;
					phone?: string | null;
					nickname?: string | null;
					bio?: string | null;
					email?: string | null;
				};
			};
			matches: {
				Row: {
					id: number;
					created_at: string | null;
					from: string | null;
					to: string | null;
				};
				Insert: {
					id?: number;
					created_at?: string | null;
					from?: string | null;
					to?: string | null;
				};
				Update: {
					id?: number;
					created_at?: string | null;
					from?: string | null;
					to?: string | null;
				};
			};
			opt_ins: {
				Row: {
					id: number;
					created_at: string | null;
					phone: string | null;
					week: number | null;
				};
				Insert: {
					id?: number;
					created_at?: string | null;
					phone?: string | null;
					week?: number | null;
				};
				Update: {
					id?: number;
					created_at?: string | null;
					phone?: string | null;
					week?: number | null;
				};
			};
			responses: {
				Row: {
					timestamp: string;
					year: number;
					year_match: number[];
					pronouns: string;
					pronouns_match: string;
					phone: string;
					nickname: string;
					email: string;
					keywords: string;
					keywords_match: string;
					id: number;
					confirm: number[] | null;
				};
				Insert: {
					timestamp?: string;
					year: number;
					year_match: number[];
					pronouns: string;
					pronouns_match: string;
					phone: string;
					nickname: string;
					email: string;
					keywords: string;
					keywords_match: string;
					id?: number;
					confirm?: number[] | null;
				};
				Update: {
					timestamp?: string;
					year?: number;
					year_match?: number[];
					pronouns?: string;
					pronouns_match?: string;
					phone?: string;
					nickname?: string;
					email?: string;
					keywords?: string;
					keywords_match?: string;
					id?: number;
					confirm?: number[] | null;
				};
			};
			responses_duplicate: {
				Row: {
					timestamp: string;
					year: number;
					year_match: number[];
					pronouns: string;
					pronouns_match: string;
					phone: string;
					nickname: string;
					email: string;
					keywords: string;
					keywords_match: string;
					id: number;
					confirm: number[] | null;
				};
				Insert: {
					timestamp?: string;
					year: number;
					year_match: number[];
					pronouns: string;
					pronouns_match: string;
					phone: string;
					nickname: string;
					email: string;
					keywords: string;
					keywords_match: string;
					id?: number;
					confirm?: number[] | null;
				};
				Update: {
					timestamp?: string;
					year?: number;
					year_match?: number[];
					pronouns?: string;
					pronouns_match?: string;
					phone?: string;
					nickname?: string;
					email?: string;
					keywords?: string;
					keywords_match?: string;
					id?: number;
					confirm?: number[] | null;
				};
			};
			weeks: {
				Row: {
					id: number;
					created_at: string | null;
				};
				Insert: {
					id?: number;
					created_at?: string | null;
				};
				Update: {
					id?: number;
					created_at?: string | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}
