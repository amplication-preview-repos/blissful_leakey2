import { BookingUpdateManyWithoutUserProfilesInput } from "./BookingUpdateManyWithoutUserProfilesInput";
import { WishlistUpdateManyWithoutUserProfilesInput } from "./WishlistUpdateManyWithoutUserProfilesInput";

export type UserProfileUpdateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  bookings?: BookingUpdateManyWithoutUserProfilesInput;
  wishlists?: WishlistUpdateManyWithoutUserProfilesInput;
};
