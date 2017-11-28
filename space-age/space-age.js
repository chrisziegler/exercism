module.exports = class SpaceAge {
    constructor(num) {
        this.seconds = num
    }
   
    round(value, decimals) {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    onEarth(...orbital) {
        let [op] = orbital
        !op ? op = 365.25 : op *= 365.25
        const yrsOnPlanet = this.seconds / 86400  / op 
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