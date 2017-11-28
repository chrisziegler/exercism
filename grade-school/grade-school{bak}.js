class School {
    constructor() {
         this.db = {}
    }
    add(name, level){
        if(this.db[level]){ 
            this.db[level].push(name)
        } else {
             this.db[level] = [name]
        }      
    }

    grade(level) {
        if(!this.db[level]) {
            this.db[level] = []
        }
        return this.db[level].sort()
    }

    roster(){
        const sortDb = this.db
        for(let key in sortDb){
            // console.log('obj key: ', key) //2
            // console.log('obj value: ', sortDb[key])  //['Aimee, '...'']
            sortDb[key].sort()
        }
    
        return sortDb
    }
}

module.exports = School

//NODE
const school = new School()
school.add('Aimee', 2)
school.add('Blair',2);
school.add('James',2);
school.add('Paul',2);
school.add('Tyson', 4);
school.add('Zack', 4);
school.add('Charles', 4);
// console.log(school.roster())
console.log('add empty array: ', school.grade(5));
console.log('sort roster: ', school.roster())

// var expectedDb = { 2 : [ 'Aimee' ] };
//console output of: { '2' : [ 'Aimee' ] };  is apparently expected and accepted
// this is just a key-value pair 
// object.grade = 2 and object.name = 'Aimee'
