export interface Image {
  id: string;
  caption: string;
  device_timestamp: number;
  media_type: string;
  media_url: string;
  permalink: string;
  location: Location;
}

export interface Location {
  pk: string;
  short_name: string;
  facebook_places_id: string;
  external_source: string;
  name: string;
  address: string;
  city: string;
  has_viewer_saved: boolean;
  lng: number;
  lat: number;
  is_eligible_for_guides: boolean;
}
