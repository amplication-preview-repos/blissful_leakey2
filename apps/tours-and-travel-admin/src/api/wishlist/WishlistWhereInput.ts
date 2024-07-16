import { StringFilter } from "../../util/StringFilter";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type WishlistWhereInput = {
  id?: StringFilter;
  tour?: TourWhereUniqueInput;
  userProfile?: UserProfileWhereUniqueInput;
};
