import { ArgsType, Field } from "@nestjs/graphql";
import { CheckStatusInput } from "./CheckStatusInput";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class CheckStatusArgs {
    @Field(() => CheckStatusInput)
    @ApiProperty({
        required: true,
        type: () => CheckStatusInput
    })
    @Type(() => CheckStatusInput)
    data!: CheckStatusInput;
}

export { CheckStatusArgs as CheckStatusArgs };