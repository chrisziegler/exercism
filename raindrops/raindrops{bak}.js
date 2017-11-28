class Raindrops {
    convert(num){
        let  sound = ''
        let i = 0
        while(num >= i)  {
            if(num % i === 0) {
                i === 3 ? sound += 'Pling' : i === 5 ? sound += 'Plang' : i === 7 ? sound += 'Plong' : sound += ''
            }
            i++      
        }
        // if (!sound) return num.toString()
        return ( sound || num.toString())
    }
}

module.exports = Raindrops

//NODE
const drops = new Raindrops()
console.log(drops.convert(4)) // PlingPlang