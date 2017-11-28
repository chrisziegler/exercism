/* Please see iteration 1 if you need something a lot easier to reason about...
   this was experimental practice to see how many rest parameters/spread operators
   and destructuring assignments I could get away with while using a constructor */

module.exports = class Triangle { 
    constructor(...args){
       [...this.args] = args 
    }
    kind(){
        const [...args] = this.args
        const triangleTyper = (...args) => {
            let[a, b, c] = args
            const threeSides = new Set([a, b, c])
            for(let side of threeSides){
                if(Math.sign(side) === 0 || Math.sign(side) === -1) {
                    throw new Error('test triangles with no size, or negative sides are illegal')
                } 
            }      
            if(a + b < c || b + c < a || c + a < b){
            throw new Error('triangles violating triangle inequality are illegal')
            } 
            if (threeSides.size === 3) {
                return `scalene`
            } else if (threeSides.size === 2) {
                    return `isosceles`
            } else return `equilateral`
        }
        return triangleTyper(...args)
    }
}


