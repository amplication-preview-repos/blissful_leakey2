import { SortOrder } from "../../util/SortOrder";

export type TourOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
};
