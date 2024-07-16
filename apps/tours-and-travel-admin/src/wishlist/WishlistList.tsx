import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TOUR_TITLE_FIELD } from "../tour/TourTitle";
import { USERPROFILE_TITLE_FIELD } from "../userProfile/UserProfileTitle";

export const WishlistList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Wishlists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Tour" source="tour.id" reference="Tour">
          <TextField source={TOUR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="UserProfile"
          source="userprofile.id"
          reference="UserProfile"
        >
          <TextField source={USERPROFILE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
