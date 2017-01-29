var confirmController = finomenaApp.controller('confirmController', function (quizcontent, dataService, $scope,$rootScope) {
    this.quizcontent = quizcontent;
    this.dataService = dataService;
    
    this.confirmation=function(){
        this.quizcontent.markquiz(dataService);
        
        this.quizcontent.confirmation=false;
        
        this.quizcontent.showResults=true;
        
        this.quizcontent.finalnumCorrect(quizcontent.numCorrect);
    };
});

confirmController.$inject = ['quizcontent', 'dataService'];