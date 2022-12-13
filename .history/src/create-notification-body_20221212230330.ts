/* eslint-disable prettier/prettier */
export class CreateNotificationBody{
    // campos para serem validados
    @Isn
    recipientId:string;
    content:string;
    category:string;
}
