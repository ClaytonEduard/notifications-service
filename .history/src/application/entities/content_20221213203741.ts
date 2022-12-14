export class Content{
    private readonly content:string;

    get value():string{
        return this.content;
    }

    private validateContentL

    constructor(content:string){
        this.content = content;
    }
}