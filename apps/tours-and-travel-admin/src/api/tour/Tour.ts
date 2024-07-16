import { Wishlist } from "../wishlist/Wishlist";
import { Booking } from "../booking/Booking";

export type Tour = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  title: string | null;
  description: string | null;
  location: string | null;
  wishlists?: Array<Wishlist>;
  bookings?: Array<Booking>;
};
