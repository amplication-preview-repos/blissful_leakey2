import { WishlistCreateNestedManyWithoutToursInput } from "./WishlistCreateNestedManyWithoutToursInput";
import { BookingCreateNestedManyWithoutToursInput } from "./BookingCreateNestedManyWithoutToursInput";

export type TourCreateInput = {
  price?: number | null;
  title?: string | null;
  description?: string | null;
  location?: string | null;
  wishlists?: WishlistCreateNestedManyWithoutToursInput;
  bookings?: BookingCreateNestedManyWithoutToursInput;
};
