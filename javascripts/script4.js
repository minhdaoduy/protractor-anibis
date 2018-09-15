var names = ['John','Jane','Mark'];
var years = new Array(1990, 1969, 1948);
var john = {
    name: 'Jonh',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

function JohnDo(job) {
    if (job==='driver'){console.log("He is a driver.");}

    switch (job) {
        case 'teacher':
            return "John teachers kids.";
            break;
        case 'driver':
            return "John drivers a car in Lisbon.";
            break;
        case 'cop':
            return "John helps fight crime.";
            break;
        default:
            return "John does something else.";
    }


}

var do_something = JohnDo('driver');
console.log(do_something);
console.log(names[0]);
names[1]='Minh';
console.log(names[1]);
console.log(years[1]);

console.log(john.lastName);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['School'] = 'HandLight';
jane['isMarried'] = true;

console.log(jane);
