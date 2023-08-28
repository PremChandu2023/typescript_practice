import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty } from "class-validator";

@Injectable()
export class OrderItemDTo {
    @ApiProperty({example : 1})
    @IsNumber()
    @IsNotEmpty()
    menuItemId:number;

    @ApiProperty({example : 2})
    @IsNumber()
    @IsNotEmpty()
    quantity:number
    
}
