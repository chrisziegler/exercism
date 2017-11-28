class Matrix {
    constructor(numStr) {
        this.rows = numStr
            .split('\n')
            .map(item => item.split(' ').map(Number))

        this.columns = this.rows[0].map((_, index) => 
            this.rows.map((row) => 
                row[index]));
    }
}

module.exports = Matrix

//NODE
let matrix = new Matrix('89 1903 3\n18 3 1\n9 4 800')
console.log(matrix.rows)

