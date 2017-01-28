var quizController = finomenaApp.controller('quizController', function (quizcontent, dataService, $scope) {
    $scope.value = 'Continue';
    this.quizcontent = quizcontent;
    this.dataService = dataService;
    
    //Flags
    this.option_not_choosen = true;
    this.showQuiz = true;
    
    //For counters
    this.activeQuestion = 0;
    var numQuestionsAnswered = 0;
    var quizLength = dataService.questiondata.length;
    
    //Functions
    this.setActiveQuestion = function () {
        if (this.activeQuestion >= quizLength-1) {
            this.showQuiz = false;
            //this.quizcontent=true;
            //End the quiz here
            this.quizcontent.confirmation=true;
            //this.quizcontent.markquiz(dataService);                    
            //this.quizcontent.showResults = true;
        }
        else {
            this.activeQuestion++;
        }
    };
    
    this.questionAnswered = function () {
        this.setActiveQuestion();
        if (dataService.questiondata[this.activeQuestion].selected != null) {
            numQuestionsAnswered++;
        }
        this.option_not_choosen = true;
    };
    
    this.selectAnswer = function (index) {
        dataService.questiondata[this.activeQuestion].selected = index;
        this.option_not_choosen = false;
    };
});
quizController.$inject = ['quizcontent', 'dataService'];