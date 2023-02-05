export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			matches: {
				Row: {
					created_at: string | null;
					from_email: string | null;
					id: number;
					to_email: string | null;
					week: number | null;
				};
				Insert: {
					created_at?: string | null;
					from_email?: string | null;
					id?: number;
					to_email?: string | null;
					week?: number | null;
				};
				Update: {
					created_at?: string | null;
					from_email?: string | null;
					id?: number;
					to_email?: string | null;
					week?: number | null;
				};
			};
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
					keywords_match: string;
					nickname: string;
					opt_in_status: Database['public']['Enums']['opt_in_enum'] | null;
					phone: string;
					pronouns: string;
					pronouns_match: string;
					signed_confirmation: string[];
					timestamp: string;
					year: string;
					year_match: string[];
				};
				Insert: {
					bio: string;
					email: string;
					keywords_match: string;
					nickname: string;
					opt_in_status?: Database['public']['Enums']['opt_in_enum'] | null;
					phone: string;
					pronouns: string;
					pronouns_match: string;
					signed_confirmation?: string[];
					timestamp?: string;
					year: string;
					year_match: string[];
				};
				Update: {
					bio?: string;
					email?: string;
					keywords_match?: string;
					nickname?: string;
					opt_in_status?: Database['public']['Enums']['opt_in_enum'] | null;
					phone?: string;
					pronouns?: string;
					pronouns_match?: string;
					signed_confirmation?: string[];
					timestamp?: string;
					year?: string;
					year_match?: string[];
				};
			};
			profiles2: {
				Row: {
					bio: string | null;
					email: string | null;
					keywords_match: string[] | null;
					nickname: string | null;
					opt_in: boolean | null;
					phone: string | null;
					pronouns: string | null;
					pronouns_match: string | null;
					timestamp: string | null;
					year: string | null;
					year_match: string[] | null;
				};
				Insert: {
					bio?: string | null;
					email?: string | null;
					keywords_match?: string[] | null;
					nickname?: string | null;
					opt_in?: boolean | null;
					phone?: string | null;
					pronouns?: string | null;
					pronouns_match?: string | null;
					timestamp?: string | null;
					year?: string | null;
					year_match?: string[] | null;
				};
				Update: {
					bio?: string | null;
					email?: string | null;
					keywords_match?: string[] | null;
					nickname?: string | null;
					opt_in?: boolean | null;
					phone?: string | null;
					pronouns?: string | null;
					pronouns_match?: string | null;
					timestamp?: string | null;
					year?: string | null;
					year_match?: string[] | null;
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
			responses: {
				Row: {
					confirm: number[] | null;
					email: string;
					id: number;
					keywords: string;
					keywords_match: string;
					nickname: string;
					phone: string;
					pronouns: string;
					pronouns_match: string;
					timestamp: string;
					year: number;
					year_match: number[];
				};
				Insert: {
					confirm?: number[] | null;
					email: string;
					id?: number;
					keywords: string;
					keywords_match: string;
					nickname: string;
					phone: string;
					pronouns: string;
					pronouns_match: string;
					timestamp?: string;
					year: number;
					year_match: number[];
				};
				Update: {
					confirm?: number[] | null;
					email?: string;
					id?: number;
					keywords?: string;
					keywords_match?: string;
					nickname?: string;
					phone?: string;
					pronouns?: string;
					pronouns_match?: string;
					timestamp?: string;
					year?: number;
					year_match?: number[];
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
			opt_in_enum: 'SENT' | 'OPTED_IN' | '';
		};
	};
}
