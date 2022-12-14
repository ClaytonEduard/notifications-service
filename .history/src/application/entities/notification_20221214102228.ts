import { Replace } from "src/helpers/replace";
import { Content } from "./content";

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    // a interogação significa opcional
    readAt?: Date | null; // pode ser date, undefined ou null
    createdAt: Date;
}

export class Notification {

    private _id: string;

    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
        this._id = 
        // a data de criacao pode ser opcional, ai incluimos uma nova caso nao seja mencionanda
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }

    public set content(content: Content) {
        this.props.content = content;
    }
    public get content(): Content {
        return this.props.content;
    }

    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }
    public get recipientId(): string {
        return this.props.recipientId;
    }

    public set category(category: string) {
        this.props.category = category;
    }
    public get category(): string {
        return this.props.category;
    }
    public set readAt(readAt: Date | null | undefined) {
        this.props.readAt = readAt;
    }
    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }

}
