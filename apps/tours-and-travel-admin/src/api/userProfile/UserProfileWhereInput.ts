import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type UserProfileWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  address?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  wishlists?: WishlistListRelationFilter;
};
