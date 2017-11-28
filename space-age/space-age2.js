module.exports = class SpaceAge {
    constructor(num) {
        this.seconds = num
        this.conv = 86400 //seconds in day
    }
   
    round(value, decimals) {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
    onEarth(...orbital) {
        let [op] = orbital
        if(!op) {
            op = 365.25
        } else {
            op *= 365.25
        }
        const yrsOnPlanet = ((this.seconds / this.conv ) / op )
        return this.round(yrsOnPlanet, 2)
    }
    onMercury(){ return this.onEarth(0.2408467) }
    onVenus(){ return this.onEarth(0.61519726) }
    onMars(){ return this.onEarth(1.8808158) }
    onJupiter(){ return this.onEarth(11.862615) }  
    onSaturn(){ return this.onEarth(29.447498) }
    onUranus(){ return this.onEarth(84.016846) }
    onNeptune(){ return this.onEarth(164.79132) }     
}

//FIRST ITERATION
// class SpaceAge {
//     constructor(num) {
//         this.seconds = num
//         this.conv = 86400 //seconds in day
//     }
   
//     round(value, decimals) {
//             return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
//     }
//     onEarth() {
//         const earthYrs = ((this.seconds / this.conv ) / 365.25 )
//         return this.round(earthYrs, 2)
//     }
//     onMercury(){
//         let orbitalP = 0.2408467 * 365.25
//         const mercuryYrs = ((this.seconds / this.conv) / orbitalP )
//         return this.round(mercuryYrs, 2)
//     }
//     onVenus(){
//         let orbitalP = 0.61519726 * 365.25
//         const venusYrs = ((this.seconds / this.conv) / orbitalP )
//         return this.round(venusYrs, 2)
//     }
//     onMars(){
//         let orbitalP = 1.8808158 * 365.25
//         const marsYrs = ((this.seconds / this.conv) / orbitalP )
//         return this.round(marsYrs, 2)
//     }
//     onJupiter(){
//         let orbitalP = 11.862615 * 365.25
//         const jupiterYrs = ((this.seconds / this.conv) / orbitalP )
//         return this.round(jupiterYrs, 2)
//     }
//     onSaturn(){
//         let orbitalP = 29.447498 * 365.25
//         const saturnYrs = ((this.seconds / this.conv) / orbitalP )
//         return this.round(saturnYrs, 2)
//     }
//     onUranus(){
//         let orbitalP = 84.016846 * 365.25
//         const uranusYrs = ((this.seconds / this.conv) / orbitalP )
//         return this.round(uranusYrs, 2)
//     }
//     onNeptune(){
//         let orbitalP = 164.79132 * 365.25
//         const neptuneYrs = ((this.seconds / this.conv) / orbitalP )
//         return this.round(neptuneYrs, 2)
//     }
// }



// module.exports = SpaceAge
// const age = new SpaceAge(1000000000)
// console.log(age.onEarth())

