import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type WishlistCreateInput = {
  tour?: TourWhereUniqueInput | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
