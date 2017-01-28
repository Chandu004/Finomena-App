var dataService = finomenaApp.factory('dataService', function () {
    var dataObj = {
        'questiondata': questiondata,
        'correctAnswers': correctAnswers
    };
    return dataObj;
});
var questiondata = [
      {
        "question": "Who are the founders of Finomena?"
        , "options": [
            {
                "answer": "Abhishek Garg and Riddhi Mittal"
         }
            , {
                "answer": "Jobs and Wozniak"
         }
            , {
                "answer": "Gates and Balmer"
         }
            , {
                "answer": "None of the above"
         }
      ]
        , "selected": null
        , "correct": null
      }
    , {
        "question": "Finomena is located at?"
        , "options": [
            {
                "answer": "Jammu"
         }
            , {
                "answer": "Punjab"
         }
            , {
                "answer": "Meghalaya"
         }
            , {
                "answer": "Bangalore"
         }
      ]
        , "selected": null
        , "correct": null
   }
    , {
        "question": "What is the tagline of Finomena"
        , "options": [
            {
                "answer": "Dare to Dream"
         }
            , {
                "answer": "Nothing"
         }
            , {
                "answer": "Just do it"
         }
            , {
                "answer": "Think different"
         }
      ]
        , "selected": null
        , "correct": null
   }
    , {
        "question": "What is the price of MacBook Air show on Finomena's homepage"
        , "options": [
            {
                "answer": "73900"
         }
            , {
                "answer": "89000"
         }
            , {
                "answer": "75000"
         }
            , {
                "answer": "Free of cost"
         }
      ]
        , "selected": null
        , "correct": null
   }
    , {
        "question": "Is Finomena.com a mobile responsive website"
        , "options": [
            {
                "answer": "Yes,it is"
         }
            , {
                "answer": "Don't know what a responsive website means"
         }
            , {
                "answer": "No it isn't"
         }
            , {
                "answer": "None of the above"
         }
      ]
        , "selected": null
        , "correct": null
   }
];
var correctAnswers = [0, 3, 0, 0, 0];