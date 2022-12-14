export class Content{
    private readonly content:string;

    get value():string{
        return this.content;
    }

    private validateC

    constructor(content:string){
        this.content = content;
    }
}