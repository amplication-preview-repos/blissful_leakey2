import { Tour } from "../tour/Tour";
import { UserProfile } from "../userProfile/UserProfile";

export type Wishlist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tour?: Tour | null;
  userProfile?: UserProfile | null;
};
