module.exports = class Matrix {
    constructor(numStr) {
        this.rows = numStr
            .split('\n').map(num => num.split(' ').map(Number))

        this.columns = this.rows[0].map((_, index) => 
            this.rows.map((row) => 
                row[index]));
    }
}