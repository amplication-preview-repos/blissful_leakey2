import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TourTitle } from "../tour/TourTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const WishlistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
