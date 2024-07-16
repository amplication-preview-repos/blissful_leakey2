/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { Tour } from "../../tour/base/Tour";

@ObjectType()
class Booking {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  bookingDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserProfile,
  })
  @ValidateNested()
  @Type(() => UserProfile)
  @IsOptional()
  userProfile?: UserProfile | null;

  @ApiProperty({
    required: false,
    type: () => Tour,
  })
  @ValidateNested()
  @Type(() => Tour)
  @IsOptional()
  tour?: Tour | null;
}

export { Booking as Booking };
