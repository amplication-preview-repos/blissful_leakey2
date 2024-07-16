import { BookingCreateNestedManyWithoutUserProfilesInput } from "./BookingCreateNestedManyWithoutUserProfilesInput";
import { WishlistCreateNestedManyWithoutUserProfilesInput } from "./WishlistCreateNestedManyWithoutUserProfilesInput";

export type UserProfileCreateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  bookings?: BookingCreateNestedManyWithoutUserProfilesInput;
  wishlists?: WishlistCreateNestedManyWithoutUserProfilesInput;
};
