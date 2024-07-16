import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phone" source="phone" />
        <TextInput label="address" multiline source="address" />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wishlists"
          reference="Wishlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WishlistTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
