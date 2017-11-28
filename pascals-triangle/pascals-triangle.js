module.exports = class Triangle { 
    constructor(n){
        this.num = n
        this.rows = this.pascal()
        this.lastRow = this.rows[n - 1]
    }
    pascal(){
        let tri = [], length = this.num, row = 0;
        for(row; row < length; row++){
            tri[row] = []
            for(let col = 0; col < row + 1; col++){
                if(col === 0 || col === row){
                    tri[row][col] = 1
                } else {
                    tri[row][col] = (tri[row - 1][col -1] + tri[row - 1][col])
                }
            }
        }
        return tri
    }
}




