export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			opt_ins: {
				Row: {
					created_at: string | null;
					id: number;
					phone: string;
					week: number;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					phone: string;
					week: number;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					phone?: string;
					week?: number;
				};
			};
			opt_ins_sent: {
				Row: {
					created_at: string | null;
					id: number;
					phone: string | null;
					week: number | null;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					phone?: string | null;
					week?: number | null;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					phone?: string | null;
					week?: number | null;
				};
			};
			profiles: {
				Row: {
					bio: string;
					email: string;
					keywords_match: string[];
					nickname: string;
					phone: string;
					pronouns: string;
					pronouns_match: string[];
					timestamp: string;
					year: string;
					year_match: string[];
				};
				Insert: {
					bio: string;
					email: string;
					keywords_match: string[];
					nickname: string;
					phone: string;
					pronouns: string;
					pronouns_match: string[];
					timestamp?: string;
					year: string;
					year_match: string[];
				};
				Update: {
					bio?: string;
					email?: string;
					keywords_match?: string[];
					nickname?: string;
					phone?: string;
					pronouns?: string;
					pronouns_match?: string[];
					timestamp?: string;
					year?: string;
					year_match?: string[];
				};
			};
			reminders: {
				Row: {
					created_at: string | null;
					id: number;
					message: string | null;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					message?: string | null;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					message?: string | null;
				};
			};
			weeks: {
				Row: {
					created_at: string | null;
					id: number;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
				};
				Update: {
					created_at?: string | null;
					id?: number;
				};
			};
		};
		Views: {
			view_opt_in_but_no_response: {
				Row: {
					created_at: string | null;
					id: number | null;
					phone: string | null;
					week: number | null;
				};
				Insert: {
					created_at?: string | null;
					id?: number | null;
					phone?: string | null;
					week?: number | null;
				};
				Update: {
					created_at?: string | null;
					id?: number | null;
					phone?: string | null;
					week?: number | null;
				};
			};
			view_response_but_no_opt_in: {
				Row: {
					confirm: number[] | null;
					email: string | null;
					id: number | null;
					keywords: string | null;
					keywords_match: string | null;
					nickname: string | null;
					phone: string | null;
					pronouns: string | null;
					pronouns_match: string | null;
					timestamp: string | null;
					year: number | null;
					year_match: number[] | null;
				};
				Insert: {
					confirm?: number[] | null;
					email?: string | null;
					id?: number | null;
					keywords?: string | null;
					keywords_match?: string | null;
					nickname?: string | null;
					phone?: string | null;
					pronouns?: string | null;
					pronouns_match?: string | null;
					timestamp?: string | null;
					year?: number | null;
					year_match?: number[] | null;
				};
				Update: {
					confirm?: number[] | null;
					email?: string | null;
					id?: number | null;
					keywords?: string | null;
					keywords_match?: string | null;
					nickname?: string | null;
					phone?: string | null;
					pronouns?: string | null;
					pronouns_match?: string | null;
					timestamp?: string | null;
					year?: number | null;
					year_match?: number[] | null;
				};
			};
			view_response_but_no_opt_in_sent: {
				Row: {
					confirm: number[] | null;
					email: string | null;
					id: number | null;
					keywords: string | null;
					keywords_match: string | null;
					nickname: string | null;
					phone: string | null;
					pronouns: string | null;
					pronouns_match: string | null;
					timestamp: string | null;
					year: number | null;
					year_match: number[] | null;
				};
				Insert: {
					confirm?: number[] | null;
					email?: string | null;
					id?: number | null;
					keywords?: string | null;
					keywords_match?: string | null;
					nickname?: string | null;
					phone?: string | null;
					pronouns?: string | null;
					pronouns_match?: string | null;
					timestamp?: string | null;
					year?: number | null;
					year_match?: number[] | null;
				};
				Update: {
					confirm?: number[] | null;
					email?: string | null;
					id?: number | null;
					keywords?: string | null;
					keywords_match?: string | null;
					nickname?: string | null;
					phone?: string | null;
					pronouns?: string | null;
					pronouns_match?: string | null;
					timestamp?: string | null;
					year?: number | null;
					year_match?: number[] | null;
				};
			};
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}
