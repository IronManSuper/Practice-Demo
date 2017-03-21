"use strict";

/**
 * Created by Administrator on 2017/2/5.
 */
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
/*
for(var i=0;i<10;i++){
    (function(i){
        console.time(i);
        console.log(i);
        setTimeout(function(){
            console.log(i+" i")
        },100*i);
        console.timeEnd(i+'结束');
    })(i);
}*/
//# sourceMappingURL=forDemo.js.map

//# sourceMappingURL=forDemo-compiled.js.map