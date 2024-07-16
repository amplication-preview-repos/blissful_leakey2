import { WishlistUpdateManyWithoutToursInput } from "./WishlistUpdateManyWithoutToursInput";
import { BookingUpdateManyWithoutToursInput } from "./BookingUpdateManyWithoutToursInput";

export type TourUpdateInput = {
  price?: number | null;
  title?: string | null;
  description?: string | null;
  location?: string | null;
  wishlists?: WishlistUpdateManyWithoutToursInput;
  bookings?: BookingUpdateManyWithoutToursInput;
};
