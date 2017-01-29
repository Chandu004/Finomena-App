var resultsController = finomenaApp.controller('resultsController', function (quizcontent, dataService,$scope,$rootScope) {
    this.quizcontent = quizcontent;
    this.dataService = dataService;
    this.hello = 'Next';
    this.length = dataService.questiondata.length;
    this.correctAnswers=this.quizcontent.numCorrect;  
    this.wrongNumber=(this.length)-(this.correctAnswers);   
        
    $scope.myJson = {
        "type": "pie"
        , "title": {
            "text": "Results"
        }
        , "series": [
            {
                "values": [this.wrongNumber]
            }
            , {
                "values": [this.correctAnswers]
            }
            ]
    };
});
resultsController.$inject = ['quizcontent', 'dataService'];