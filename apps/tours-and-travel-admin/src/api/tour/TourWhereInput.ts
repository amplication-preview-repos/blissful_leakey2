import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type TourWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  location?: StringNullableFilter;
  wishlists?: WishlistListRelationFilter;
  bookings?: BookingListRelationFilter;
};
