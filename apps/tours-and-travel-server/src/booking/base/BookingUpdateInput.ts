/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";
import { TourWhereUniqueInput } from "../../tour/base/TourWhereUniqueInput";

@InputType()
class BookingUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  bookingDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => UserProfileWhereUniqueInput, {
    nullable: true,
  })
  userProfile?: UserProfileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TourWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TourWhereUniqueInput)
  @IsOptional()
  @Field(() => TourWhereUniqueInput, {
    nullable: true,
  })
  tour?: TourWhereUniqueInput | null;
}

export { BookingUpdateInput as BookingUpdateInput };
