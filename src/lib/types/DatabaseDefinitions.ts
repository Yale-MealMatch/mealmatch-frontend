export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			responses: {
				Row: {
					id: string;
					timestamp: string;
					year: number;
					year_match: number[];
					pronouns: string;
					pronouns_match: string[];
					phone: string;
					nickname: string;
					bio: string;
					email: string;
				};
				Insert: {
					id: string;
					timestamp?: string;
					year: number;
					year_match: number[];
					pronouns: string;
					pronouns_match: string[];
					phone: string;
					nickname: string;
					bio: string;
					email: string;
				};
				Update: {
					id?: string;
					timestamp?: string;
					year?: number;
					year_match?: number[];
					pronouns?: string;
					pronouns_match?: string[];
					phone?: string;
					nickname?: string;
					bio?: string;
					email?: string;
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
