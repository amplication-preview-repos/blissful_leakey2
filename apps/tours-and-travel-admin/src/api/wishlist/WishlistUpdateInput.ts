import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type WishlistUpdateInput = {
  tour?: TourWhereUniqueInput | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
