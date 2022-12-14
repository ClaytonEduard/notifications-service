export class Content{
    private readonly content:string;

    get value():string{
        return this.content;
    }

    private validateContentLength(content: string):boolean{}

    constructor(content:string){
        this.content = content;
    }
}