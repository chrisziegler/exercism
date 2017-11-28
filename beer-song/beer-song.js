module.exports = class BeerSong {

    verse(num) {
        if (num > 2) {
            return ( 
`${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.
`)
        } if (num === 2) {
                return (
`2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
`)
        } if (num === 1) {
            return (
`1 bottle of beer on the wall, 1 bottle of beer.
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
        let verses = []
        for(let i = start; i >= finish; i--) {
           verses.push(this.verse(i))
         }
        return verses.join('\n');
    }
}



