/**
 * Created by Administrator on 2017/2/6.
 */
/**
 *typeScript支持通过getters/setters来截取对对象成员的访问
 */
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
var passcode = "secret passcode";
var Employee2 = (function () {
    function Employee2() {
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error:Unauthorized update of employee");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var emloyee2 = new Employee2();
emloyee2.fullName = "Bob Smith";
if (emloyee2.fullName) {
    alert(emloyee2.fullName);
}
//# sourceMappingURL=GetAndSet.js.map