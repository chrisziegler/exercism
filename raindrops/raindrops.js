class Raindrops {
    convert(num){
        let  sound = '', i = 0;
        while(num >= i)  {
            if(num % i === 0) {
                i === 3 ? sound += 'Pling' : i === 5 ? sound += 'Plang' : i === 7 ? sound += 'Plong' : sound += ''
            }
            i++      
        }
        return (sound || num + '')
    }
}

module.exports = Raindrops

//NODE
const drops = new Raindrops()
console.log(drops.convert(144456)) // Plong








