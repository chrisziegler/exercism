class BeerSong {

    verse(num) {
        // return this.sing(num)
        if (num > 2) {
            return ( 
`${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.
`)
        } if (num === 2) {
                return (
`${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottle of beer on the wall.
`)
        } if (num === 1) {
            return (
`${num} bottle of beer on the wall, ${num} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`)
        } if (num === 0) {
            return (
`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`)
        }
    }
    

    sing(start, finish = 0) {
        let verses = ''
        for(let i = 0; i <= (start - finish); i++) {
            let beers = Math.abs(i - start)

                if (beers > 2) {
                    verses +=
`${beers} bottles of beer on the wall, ${beers} bottles of beer.
Take one down and pass it around, ${beers - 1} bottles of beer on the wall.

`
                } if (beers === 2) {
                    verses +=
`${beers} bottles of beer on the wall, ${beers} bottles of beer.
Take one down and pass it around, ${beers - 1} bottle of beer on the wall.

`
                 } if (beers === 1) {
                     verses +=
`${beers} bottle of beer on the wall, ${beers} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.

`
                } if (beers === 0) {
                    verses +=
`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
            }
         }
        return verses;
    }
}

module.exports = BeerSong
const song = new BeerSong()
// console.log(song.verse(12))
console.log(song.sing(3))





//        const multi = `${i} bottles of beer on the wall, ${i} bottles of beer.
// Take one down and pass it around, ${i - 1} bottles of beer on the wall.
// `
//         const trans = `${i} bottles of beer on the wall, ${i} bottles of beer.
// Take one down and pass it around, ${i - 1} bottle of beer on the wall.
// `
//     const one = `${i} bottle of beer on the wall, ${i} bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// `
//         const none = `No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// `

//         if (i > 2) return multi
//         if (i === 2)  return trans
//         if (i === 1) return one
//         if (i === 0) return none