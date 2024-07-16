import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  userProfile?: UserProfileWhereUniqueInput | null;
  tour?: TourWhereUniqueInput | null;
};
