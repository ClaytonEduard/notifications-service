export interface NotificationProps{
    content: string;
    category:string;
}

export class Notification {
    private props: NotificationProps;

    constructor() {
        this.content = '';
    }

    public set content(content:string) {
        if(content.length<5){
            throw new Error();
        }
    }



}