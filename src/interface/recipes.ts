export interface IRecipes {
	count: number;
	results: IRecipeResults[];
}
export interface IRecipeResults {
	slug: string;
	nutrition_visibility: string;
	compilations: (
		| Compilation
		| Compilations2
		| Compilations3
		| Compilations4
		| Compilations5
		| Compilations6
		| Compilations7
	)[];
	aspect_ratio: string;
	show: Show;
	name: string;
	num_servings: number;
	country: string;
	brand?: any;
	tags: Tag[];
	description: string;
	is_one_top: boolean;
	original_video_url: string;
	canonical_id: string;
	total_time_minutes?: number;
	credits: Credit[];
	servings_noun_plural: string;
	instructions: Instruction[];
	sections: Section[];
	inspired_by_url?: string;
	seo_path: string;
	id: number;
	draft_status: string;
	cook_time_minutes?: number;
	video_id: number;
	tips_summary?: Tipssummary;
	prep_time_minutes?: number;
	created_at: number;
	thumbnail_url: string;
	yields: string;
	facebook_posts: any[];
	topics: Topic[];
	price: Price;
	show_id: number;
	language: string;
	is_app_only: boolean;
	user_ratings: Userratings;
	is_subscriber_content: boolean;
	keywords?: string;
	brand_id?: any;
	total_time_tier?: Totaltimetier;
	video_ad_content: string;
	video_url: string;
	approved_at: number;
	renditions: Rendition[];
	seo_title?: string;
	servings_noun_singular: string;
	tips_and_ratings_enabled: boolean;
	beauty_url?: string;
	nutrition: Nutrition;
	buzz_id?: number;
	thumbnail_alt_text: string;
	updated_at: number;
	promotion: string;
	is_shoppable: boolean;
}
interface Nutrition {
	updated_at?: string;
	protein?: number;
	fat?: number;
	calories?: number;
	sugar?: number;
	carbohydrates?: number;
	fiber?: number;
}
interface Rendition {
	poster_url: string;
	bit_rate?: (null | number)[];
	aspect: string;
	width: number;
	name: string;
	container: string;
	file_size?: (null | number)[];
	url: string;
	duration: number;
	content_type: string;
	minimum_bit_rate?: (null | number)[];
	maximum_bit_rate?: (null | number)[];
	height: number;
}
interface Totaltimetier {
	tier: string;
	display_tier: string;
}
interface Userratings {
	count_positive: number;
	score: number;
	count_negative: number;
}
interface Price {
	portion: number;
	consumption_total: number;
	consumption_portion: number;
	total: number;
	updated_at: string;
}
interface Topic {
	name: string;
	slug: string;
}
interface Tipssummary {
	by_line: string;
	header: string;
	content: string;
}
interface Section {
	components: Component[];
	name?: null | string | string;
	position: number;
}
interface Component {
	id: number;
	position: number;
	measurements: (Measurement | Measurement)[];
	raw_text: string;
	extra_comment: string;
	ingredient: Ingredient;
}
interface Ingredient {
	updated_at: number;
	name: string;
	created_at: number;
	display_plural: string;
	id: number;
	display_singular: string;
}
interface Measurement {
	unit: Unit;
	quantity: string;
	id: number;
}
interface Unit {
	system: string;
	name: string;
	display_plural: string;
	display_singular: string;
	abbreviation: string;
}
interface Instruction {
	end_time: number;
	temperature?: (null | number)[];
	id: number;
	position: number;
	display_text: string;
	start_time: number;
	appliance?: (null | string)[];
}
interface Credit {
	name?: string;
	type: string;
}
interface Tag {
	root_tag_type: string;
	name: string;
	id: number;
	display_name: string;
	type: string;
}
interface Compilations7 {
	approved_at: number;
	video_id: number;
	aspect_ratio: string;
	keywords?: any;
	created_at: number;
	draft_status: string;
	language: string;
	thumbnail_url: string;
	id: number;
	beauty_url?: any;
	is_shoppable: boolean;
	facebook_posts: any[];
	show: Show[];
	description?: any;
	name: string;
	canonical_id: string;
	country: string;
	thumbnail_alt_text: string;
	video_url: string;
	buzz_id?: any;
	slug: string;
	promotion: string;
}
interface Compilations6 {
	keywords?: any;
	facebook_posts: any[];
	approved_at: number;
	canonical_id: string;
	buzz_id?: number;
	video_id: number;
	aspect_ratio: string;
	country: string;
	description?: string;
	language: string;
	name: string;
	beauty_url?: string;
	is_shoppable: boolean;
	draft_status: string;
	thumbnail_alt_text: string;
	video_url: string;
	slug: string;
	promotion: string;
	show: Show[];
	created_at: number;
	thumbnail_url: string;
	id: number;
}
interface Compilations5 {
	approved_at: number;
	video_id: number;
	aspect_ratio: string;
	keywords?: any;
	created_at: number;
	draft_status: string;
	language: string;
	thumbnail_url: string;
	id: number;
	beauty_url?: any;
	is_shoppable: boolean;
	facebook_posts: any[];
	show: Show[];
	description?: string;
	name: string;
	canonical_id: string;
	country: string;
	thumbnail_alt_text: string;
	video_url: string;
	buzz_id?: any;
	slug: string;
	promotion: string;
}
interface Compilations4 {
	approved_at: number;
	video_id: number;
	aspect_ratio: string;
	keywords?: string;
	created_at: number;
	draft_status: string;
	language: string;
	thumbnail_url: string;
	id: number;
	beauty_url?: any;
	is_shoppable: boolean;
	facebook_posts: any[];
	show: Show[];
	description?: string;
	name: string;
	canonical_id: string;
	country: string;
	thumbnail_alt_text: string;
	video_url: string;
	buzz_id?: any;
	slug: string;
	promotion: string;
}
interface Compilations3 {
	approved_at: number;
	video_id: number;
	aspect_ratio?: string;
	keywords?: any;
	created_at: number;
	draft_status: string;
	language: string;
	thumbnail_url: string;
	id: number;
	beauty_url?: any;
	is_shoppable: boolean;
	facebook_posts: any[];
	show: Show[];
	description?: string;
	name: string;
	canonical_id: string;
	country: string;
	thumbnail_alt_text: string;
	video_url: string;
	buzz_id?: any;
	slug: string;
	promotion: string;
}
interface Compilations2 {
	approved_at: number;
	video_id: number;
	aspect_ratio: string;
	keywords?: any;
	created_at: number;
	draft_status: string;
	language: string;
	thumbnail_url: string;
	id: number;
	beauty_url?: string;
	is_shoppable: boolean;
	facebook_posts: any[];
	show: Show[];
	description?: string;
	name: string;
	canonical_id: string;
	country: string;
	thumbnail_alt_text: string;
	video_url: string;
	buzz_id?: any;
	slug: string;
	promotion: string;
}
interface Compilation {
	created_at: number;
	description?: string;
	name: string;
	buzz_id?: number;
	slug: string;
	video_id: number;
	aspect_ratio?: string;
	country: string;
	facebook_posts: any[];
	show: Show[];
	thumbnail_alt_text: string;
	video_url: string;
	promotion: string;
	is_shoppable: boolean;
	keywords?: any;
	draft_status: string;
	language: string;
	thumbnail_url: string;
	approved_at: number;
	canonical_id: string;
	id: number;
	beauty_url?: any;
}
interface Show {
	name: string;
	id: number;
}
