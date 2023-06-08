import { Image } from "@/types";

const images: Image[] = [
  {
    id: "1",
    caption: "Beautiful sunset",
    device_timestamp: 1623145200,
    media_type: "image",
    media_url: "https://example.com/image1.jpg",
    permalink: "https://example.com/posts/1",
    location: {
      pk: "1",
      short_name: "Park",
      facebook_places_id: "123456789",
      external_source: "facebook",
      name: "Central Park",
      address: "123 Park Ave",
      city: "New York",
      has_viewer_saved: true,
      lng: -73.968285,
      lat: 40.785091,
      is_eligible_for_guides: true,
    },
  },
  {
    id: "2",
    caption: "City skyline",
    device_timestamp: 1623199200,
    media_type: "image",
    media_url: "https://example.com/image2.jpg",
    permalink: "https://example.com/posts/2",
    location: {
      pk: "2",
      short_name: "City",
      facebook_places_id: "987654321",
      external_source: "facebook",
      name: "Times Square",
      address: "123 Broadway",
      city: "New York",
      has_viewer_saved: false,
      lng: -73.9857,
      lat: 40.758,
      is_eligible_for_guides: true,
    },
  },
  // Adicione mais objetos de imagem aqui, se necessário
];

export default images;
