(function() {
  var questions = [{
    question: "Which declaration of the main method below would allow a class to be started as a standalone program",
    choices: ['(A) public static int main(char args[])' ,  '(B) public static void main(String args[])' , '(C) public static void MAIN(String args[])' , '(D) public static void main(String args)' ],
    correctAnswer: 1
  }, {
    question: "What is the meaning of the return data type void?",
    choices: [' (A) An empty memory space is returned so that the developers can utilize it. ', ' (B) void is not supported in Java ', ' (C) void returns no data type. ','NULL'],
    correctAnswer: 2
  }, {
    question: "What gets displayed on the screen when the following program is compiled and run. Select the one correct answer.   \n\t\t protected class example {\r\n\tpublic static void main(String args[]) {\r\n\t\tString test = \"abc\";\r\n\t\ttest = test + test;\r\n\t\tSystem.out.println(test);\r\n\t}\r\n\t}",
    choices: [' (A) The class does not compile because the top level class cannot be protected. ', ' (B) The program prints "abc" ', ' (C) The program prints "abcabc" ', ' (D) The program does not compile because statement "test = test + test" is illegal. '],
    correctAnswer: 0
  }, {
    question: "Which of the following is a Java keyword.Select the four correct answers.\r\na.  extern\r\nb.  synchronized\r\nc.  volatile\r\nd.  friend\r\ne.  friendly\r\nf.  transient\r\ng.  this\r\nh.  then",
    choices: [' (A) b, c ', ' (B) b, c, f, g ', ' (C) e, g, h ',' (D) all of above. '],
    correctAnswer: 1
  }, {
    question: "Which of the following statements about the Java language is true?",
    choices: [' (A) Both procedural and OOP are supported in Java. ', ' (B) Java supports only procedural approach towards programming. ', ' (C) Java supports only OOP approach. ', ' (D) None of the above. '],
    correctAnswer: 0
  },{
    question: "What gets printed when the following program is compiled and run? Select the one correct answer.\r\nclass test {\r\n    public static void main(String args[]) {\r\n        int i;\r\n        do {\r\n            i++;\r\n        }\r\n        while(i < 0);\r\n        System.out.println(i);\r\n    }\r\n}",
    choices: ['  (A) The program does not compile as i is not initialized.  ', '  (B) The program compiles but does not run.  ', '  (B) The program compiles but does not run.  ', '  (D) The program prints 0.  '],
    correctAnswer: 0
  },
  {
    question: "Is the following statement true or false. The constructor of a class must not have a return type. ",
    choices: ['True','false'],
    correctAnswer: 0
  },
  {
    question: "Transient keyword applied at field level, used to",
    choices: ['(A) Serialize the field','(B) Not Serialize the field','(C) Both','(D) None'],
    correctAnswer: 1
  },
  {
    question: "Write down the modifier of a method that makes the method available to all classes in the same package and to all the subclasses of this class.",
    choices: ['private','public','default','protected'],
    correctAnswer: 3
  },
  {
    question: "Which Collection is used to maintain insertion order and allow duplicates",
    choices: ['LinkedHashMap','Treeset','LinkedList','None of the above'],
    correctAnswer: 3
  },
  {
    question: "\r\n\t\tString s1 = \"WWW\";\r\n\t\tString s2 = new String(\"WWW\");\r\n\t\tif (s1 == s2) {\r\n\t\t\tSystem.out.println(\"Equal\");\r\n\t\t} else {\r\n\t\t\tSystem.out.println(\"Not Equal\");\r\n\t\t}\r\n\t",
    choices: ['Equal','Not Equal','Prints nothing'],
    correctAnswer: 1
  },
  {
    question: "A program needs to store the name, salary of employees. Which of the following data types should be used to create the Employee class. Select the three correct answers.",
    choices: ['int,String','String,double','String,int','String,long'],
    correctAnswer: 1
  },
  {
    question: "Over Loading is runtime polymorphism",
    choices: ['True','False'],
    correctAnswer: 1
  },
  {
    question: "A sub class can have more than one parent class.",
    choices: ['True','False'],
    correctAnswer: 1
  },
  {
    question: "Which method will be invoked before garbage collection",
    choices: ['Finally','finalize','final','gc'],
    correctAnswer: 1
  }
  ,
  {
    question: "Fill the blanks,Map is a collection allows ________ keys and allows ______ values",
    choices: ['Duplicate,No Duplicate','No Duplicate,Duplicate','Duplicate,Duplicate'],
    correctAnswer: 1
  },
  {
    question: "JDK containes",
    choices: ['Libraries,compilers,IDE','Libraries,compilers,JRE','Libraries,compilers,JVM'],
    correctAnswer: 0
  },
  {
    question: "Which is NOT used in thread environment",
    choices: ['join','notify','clone','sleep'],
    correctAnswer: 2
  },
  {
    question: "What will be the value of fourthChar variable as below,\r\nString str = new String(\"Java\");\r\nchar fourthChar = str.charAt(4);",
    choices: ['throws StringIndexOutofBoundsException','a',' ','None of the above'],
    correctAnswer: 0
  },
  {
    question: "Which of the following statements are correct. Select the four correct answers.\r\na.\tA Java program must have a package statement. \r\nb.\tA package statement if present must be the first statement of the program (barring any comments).\r\nc.\tIf a Java program defines both a package and import statement, then the import statement must come before the package statement. \r\nd.\tAn empty file is a valid source file. \r\ne.\tA Java file without any class or interface definitions can also be compiled. \r\nf.\tIf an import statement is present, it must appear before any class or interface definitions. ",
    choices: [' b, d, e, f ',' b, d, a, f ',' b, c, e, f ',' b, a, e, f ',' b, d','b'],
    correctAnswer: 0
  }
  ];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var name='';
  
  $('.classname').keyup(function() {
	  this.name=$(this).val();
  console.log(this.name);
});
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
	  if(questionCounter==18){
		  alert("LAST QUESTION!!,KIDNLY REVISIT ANSWERS AND SUBMIT");
	  }
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('Hi '+$('.classname').val()+',You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!'+'Percent is '+(numCorrect/questions.length)*100+'%');
    return score;
  }
})();