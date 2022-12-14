export class Content{
    private readonly content:string;

    get value():string{
        return this.content;
    }

    private validateContentLength(content: string):boolean{
        return content.length  content.length
    }

    constructor(content:string){
        this.content = content;
    }
}