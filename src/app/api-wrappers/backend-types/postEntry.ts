import { DeprecatedDatePipe } from "@angular/common";
import { TeamProfile } from "src/app/definitions/teamProfile";

// for handdling post entires
export interface PostEntry {
  id: string;
  title: string;
  primary_author: string;
  secondary_author: string;
  tertiary_author: string;
  quarternary_author: string;
  created_on: Date;
  topic: string;
  teaser: string;
  content: string;
  status: string;
  sort: any;
  modified_on: Date;
  feature_image: string;
  featured_alt: string;
  is_podcast: string;
}
