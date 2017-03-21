/**
 * Created by Administrator on 2016/11/2.
 */
function doCalc(){
    var injector=angular.injector(["ezstuff"]),
        mycalculator=injector.get("ezCalculator"),
        ret=mycalculator.add(3,4);

    document.querySelector("#result").textContent=ret;
}


angular.module('ezstuff',[])
.provider('ezCalculator',function(){
    var currency="$";
    this.setLocal=function(l){
        var repo={
            'CN':"￥",
            'US':'$',
            'JP':'￥',
            'EN':'@'
        };
        if(repo[l])currency=repo[l];
    };
    this.$get=function(){
        return {
            add:function(a,b){return currency+(a+b);},
            subtract : function(a,b){return currency + (a-b);},
            multiply : function(a,b){return currency + (a*b);},
            divide: function(a,b){return currency + (a/b);}
        }
    }
})
.config(function(ezCalculatorProvider){
    ezCalculatorProvider.setLocal("CN");
});