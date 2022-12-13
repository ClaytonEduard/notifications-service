/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID } from "class-validator";


/* eslint-disable prettier/prettier */
export class CreateNotificationBody{
    // campos para serem validados
    @IsNotEmpty()
    @IsUUID()
    recipientId:string;
    content:string;
    category:string;
}
