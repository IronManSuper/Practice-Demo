/**
 * Created by Administrator on 2017/2/5.
 */
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'User' };
document.body.innerHTML = greeter(user);
