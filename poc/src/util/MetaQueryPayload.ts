export class MetaQueryPayload {
  count!: number;
}

import { ApiProperty } from "@nestjs/swagger";

@ObjectType()
class MetaQueryPayload {
  @ApiProperty({
    required: true,
    type: [Number],
  })
  @Field(() => Number)
  count!: number;
}
export { MetaQueryPayload };
