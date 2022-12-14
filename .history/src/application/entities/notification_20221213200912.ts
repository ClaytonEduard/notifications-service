export interface NotificationProps{
    content: string;
    category:string;
}

export class Notification {
    private props: NotificationProps;

    constructor() {
        this.content = '';
        this.category = '';
    }




}