export interface NotificationProps {
    recipientId: string;
    content: string;
    category: string;
    // a interogação significa opcional
    readAt?: Date | null; // pode ser date, undefined ou null
    createdAt: Date;
}

export class Notification {
    private props: NotificationProps;

    constructor(props: NotificationProps) {
        this.props = props;
    }

    public set content(content: string) {
        this.props.content = content;
    }
    public get content(): string {
        return this.props.content;
    }

    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }
    public get recipientId(): string {
        return this.props.recipientId;
    }

    public set cate(cate: string) {
        this.props.cate = cate;
    }
    public get cate(): string {
        return this.props.cate


}
