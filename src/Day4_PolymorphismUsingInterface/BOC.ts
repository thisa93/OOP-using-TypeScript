import { Bank } from "./Bank";

export class BOC extends Bank{
    constructor(){
        super();
    }

    public interest():number{
        return this.deposit*0.082;
    }
}