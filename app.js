function Question(text,choices,answer){
    this.text=text
    this.choices=choices
    this.answer=answer
}
Question.prototype.checkAnswer=function(answer){
    return this.answer===answer

}

//Quiz constructor
function Quiz(questions){
    this.questions=questions
    this.score=0
    this.soruIndex=0

}

Quiz.prototype.soruGetir=function(){
    return this.questions[this.soruIndex]
}
Quiz.prototype.finishQuiz=function(){
    return this.questions.length===this.soruIndex
}

Quiz.prototype.tahmin=function(answer){
    var soru=this.soruGetir()
    if(soru.checkAnswer(answer)){
        this.score++
        

    }
    this.soruIndex++
    

}

var q1=new Question('En sevdiğin Programlama Dili Nedir?',['php','c#','javascript','python'],'javascript')
var q2=new Question('En sevmediğin Programlama Dili Nedir?',['php','c#','javascript','python'],'php')
var q3=new Question('En öğrenmek istediğin Programlama Dili Nedir?',['php','c#','javascript','python'],'python')
var q4=new Question('En öğrenmek istemediğin Programlama Dili Nedir?',['php','c#','javascript','python'],'c#')


var questions=[q1,q2,q3,q4]

var quiz=new Quiz(questions)
// console.log(quiz.finishQuiz())
// console.log(quiz.soruGetir())
// quiz.tahmin('javascript')
// console.log(quiz.soruGetir())
// quiz.tahmin('php')
// console.log(quiz.score)
// console.log(quiz.finishQuiz())
// console.log(questions)
// console.log(questions.answer)




 loadQuestions()

 function loadQuestions(){
     if(quiz.finishQuiz()){
         showScore()

     }
     else{
         var question=quiz.soruGetir()
         var choices=question.choices
         document.querySelector('#question').textContent=question.text
         
         for (var i = 0; i < choices.length; i++) {
             var element = document.querySelector('#choice'+i)
             element.innerHTML=choices[i]
             tahminEt('btn'+i,choices[i])
            
             
         }
         
     }
   

 }
 
 function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
 
    document.querySelector('.card-body').innerHTML = html;
 }

 function tahminEt(id,guess){
     var btn=document.getElementById(id)
     btn.onclick=function(){
         quiz.tahmin(guess)
         loadQuestions()
     }


 }
 

 
 
