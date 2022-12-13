/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from "class-validator";


/* eslint-disable prettier/prettier */
export class CreateNotificationBody{
    // campos para serem validados
    @IsNotEmpty()
    @IsUUID()
    recipientId:string;
    @IsNotEmpty()
    @Length(5,240)
    content:string;
    @IsNotEmpty()
    category:string;
}
