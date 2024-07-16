import { Tour as TTour } from "../api/tour/Tour";

export const TOUR_TITLE_FIELD = "title";

export const TourTitle = (record: TTour): string => {
  return record.title?.toString() || String(record.id);
};
