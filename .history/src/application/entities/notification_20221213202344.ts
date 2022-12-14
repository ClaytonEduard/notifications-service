export interface NotificationProps{
    content: string;
    category:string;
    // a interogação significa opcional
    readAt?: Date | null; // pode ser date, undefined ou null
}

export class Notification {
    private props: NotificationProps;

    constructor(props: NotificationProps) {
        this.props = props;
    }

    public set content(content:string) {
        this.props.content = content;
    }
    public get content(): string{
        return this.props.content;
    }
}
