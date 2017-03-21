/**
 * Created by Administrator on 2017/2/6.
 */
/**
 *typeScript支持通过getters/setters来截取对对象成员的访问
 */

class Employee{
    fullName:string;
}

let employee=new Employee();

employee.fullName="Bob Smith";

if(employee.fullName){
    console.log(employee.fullName);
}


let passcode="secret passcode";

class Employee2{
    private _fullName:string;

    get fullName():string{
        return this._fullName;
    }

    set fullName(newName:string){
        if(passcode&& passcode=="secret passcode"){
            this._fullName=newName;
        }
        else{
            console.log("Error:Unauthorized update of employee");
        }
    }
}

let emloyee2=new Employee2();
emloyee2.fullName="Bob Smith";
if(emloyee2.fullName){
    alert(emloyee2.fullName);
}
