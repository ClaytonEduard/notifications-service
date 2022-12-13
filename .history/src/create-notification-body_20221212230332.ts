/* eslint-disable prettier/prettier */
export class CreateNotificationBody{
    // campos para serem validados
    @IsNot
    recipientId:string;
    content:string;
    category:string;
}
