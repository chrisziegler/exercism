module.exports = class School {
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
            sortDb[key].sort()
        }
        return sortDb
    }
}