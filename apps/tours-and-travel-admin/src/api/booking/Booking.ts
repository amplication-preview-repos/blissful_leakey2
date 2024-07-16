import { UserProfile } from "../userProfile/UserProfile";
import { Tour } from "../tour/Tour";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bookingDate: Date | null;
  userProfile?: UserProfile | null;
  tour?: Tour | null;
};
