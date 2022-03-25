// for handdling post entires
export interface PostEntry {
  id: string;
  title: string;
  primary_author: string;
  secondary_author: string;
  tertiary_author: string;
  quarternary_author: string;
  created_on: Date;
  topic: string[];
  page_sort_tags: string[];
  teaser: string;
  content: string;
  status: string;
  sort: any;
  modified_on: Date;
  feature_image: string;
  featured_alt: string;
  is_podcast: string;
  show_modified_date: string;
}
