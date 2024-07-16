import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TourTitle } from "../tour/TourTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const WishlistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="tour.id" reference="Tour" label="Tour">
          <SelectInput optionText={TourTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userProfile.id"
          reference="UserProfile"
          label="UserProfile"
        >
          <SelectInput optionText={UserProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
