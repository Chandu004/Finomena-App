var quizcontent = finomenaApp.factory('quizcontent', function (dataService) {
    var quizcontentobj = {
        numCorrect: 0
        , quizActive: false
        , showResults: false
        , confirmation: false
        , changeState: function changeState(state) {
            quizcontentobj.quizActive = state;
        }
        , correctAnswers: []
        , markquiz: function (dataService) {
            quizcontentobj.correctAnswers = dataService.correctAnswers;
            for (var i = 0; i < dataService.questiondata.length; i++) {
                if (dataService.questiondata[i].selected === dataService.correctAnswers[i]) {
                    dataService.questiondata[i].correct = true;
                    quizcontentobj.numCorrect++;
                }
                else {
                    dataService.questiondata[i].correct = false;
                }
            }
        }
        , finalnumCorrect: function finalCorrect(finalcorrectNumber) {
            quizcontentobj.numCorrect = finalcorrectNumber;
            return quizcontentobj.numCorrect;
        }
    };
    return quizcontentobj;
});
quizcontent.$inject = ['dataService'];