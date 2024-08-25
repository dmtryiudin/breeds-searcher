import { ImageResponse } from "./ImageResponse";
import { SizeResponse } from "./SizeResponse";

export type AnimalItemResponse = {
  weight: SizeResponse;
  height: SizeResponse;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  images: Array<ImageResponse>;
};
