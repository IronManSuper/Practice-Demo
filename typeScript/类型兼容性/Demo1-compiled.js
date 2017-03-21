"use strict";

/**
 * Created by Administrator on 2017/2/8.
 */
/**
 *类型兼容性
 */
//函数参数双向协变
//当比较函数参数类型时，只有当源函数参数能够赋值给目标函数或者反过来时才能赋值成功。
//这是不稳定的，因为调用者可能传入了一个具有更精确类型信息的函数，但是调用这个传入的函数的时候
//却使用了不是那么精确的类型信息。实际上，这极少会发生错误，并且能够实现很多JavaScript里的常见模式。
var EventType;
(function (EventType) {
  EventType[EventType["Mouse"] = 0] = "Mouse";
  EventType[EventType["KeyBoard"] = 1] = "KeyBoard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handle) {}
listenEvent(EventType.Mouse, function (e) {
  return console.log(e.x + ',' + e, y);
});
listenEvent(EventType.Mouse, function (e) {
  return console.log(e.x + ',' + e.y);
});
listenEvent(EventType.Mouse, function (e) {
  return console.log(e.x + ',' + e.y);
});
//listenEvent(EventType.Mouse,(e:number)=>console.log(e)); 
//# sourceMappingURL=Demo1.js.map

//# sourceMappingURL=Demo1-compiled.js.map