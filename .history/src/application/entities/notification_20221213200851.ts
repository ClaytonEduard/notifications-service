/* eslint-disable prettier/prettier */
export interface NotificationProps{
    content: string;
    category:string;
}

export class Notification {
    private content: string;
    private category: string;

    constructor() {
        this.content = '';
        this.category = '';
    }




}