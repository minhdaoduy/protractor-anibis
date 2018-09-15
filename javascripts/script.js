function interviewQuestion(job) {
    if(job==='designer'){
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }   else if(job=='teacher'){
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Mark');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
console.log(today);