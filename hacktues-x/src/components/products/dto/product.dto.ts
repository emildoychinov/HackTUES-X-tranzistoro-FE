import type { Location } from "./location.dto";

export interface GymDTO {
  id: number;
  name: string;
  logo: string;
  location: Location;
  images: string[];
  departments: string[]; 
  tags: string[];
  classes: string[];
}