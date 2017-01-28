var finomenaApp = angular.module('finomenaApp', ['zingchart-angularjs']);

var finomenaController=finomenaApp.controller('finomenaController', function(quizcontent){
    this.name = name;
    
    this.quizcontent=quizcontent;
    
    this.activateQuiz = function(){
       quizcontent.changeState(true);
    };
});

finomenaController.$inject=['quizcontent'];

