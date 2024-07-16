import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERPROFILE_TITLE_FIELD } from "./UserProfileTitle";
import { TOUR_TITLE_FIELD } from "../tour/TourTitle";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="email" source="email" />
        <TextField label="phone" source="phone" />
        <TextField label="address" source="address" />
        <ReferenceManyField
          reference="Booking"
          target="userProfileId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="bookingDate" source="bookingDate" />
            <ReferenceField
              label="UserProfile"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tour" source="tour.id" reference="Tour">
              <TextField source={TOUR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Wishlist"
          target="userProfileId"
          label="Wishlists"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
