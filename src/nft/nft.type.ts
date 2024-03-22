import { ApiProperty } from "@nestjs/swagger";


export class NftAttribute {
  trait_type: string;
  value: string;
}

export class CreateNftDto {
  name: string;
  image: string;
  
  description: string;
  @ApiProperty({
    isArray: true,
    type: NftAttribute,
  })
  attributes: NftAttribute[];
}