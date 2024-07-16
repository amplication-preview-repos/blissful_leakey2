import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  bookingDate?: DateTimeNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
  tour?: TourWhereUniqueInput;
};
