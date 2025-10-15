//Parent : Bank 2.5%
//Children : BOC-8.2%, Peoples-7.9%, HNB-7.3%

export class Bank{
    deposit:number =100000;

    public interest():number{
        return this.deposit*0.025;
    }
}