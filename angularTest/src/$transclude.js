/**
 * Created by Administrator on 2016/11/3.
 */
angular.module('myApp')
.directive('link',function(){
    return{
        restrict:'EA',
        transclude:true,
        controller:function($scope,$element,$transclude,$log){
            $transclude(function(clone){
                var a=angular.element('<a>');
                a.attr('href',clone.next());
                a.text(clone.text());
                $log.info('Created new a tag in link directive');
                $element.append(a)
            })
        }
    }
});