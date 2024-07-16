import { Booking } from "../booking/Booking";
import { Wishlist } from "../wishlist/Wishlist";

export type UserProfile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  bookings?: Array<Booking>;
  wishlists?: Array<Wishlist>;
};
