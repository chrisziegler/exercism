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
        for(let i = start; i > finish; i--) {

                if (i > 2) {
                    verses += 
`${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i - 1} bottles of beer on the wall.


`
                } if (i === 2) {
                    verses +=
`${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i - 1} bottle of beer on the wall.


`
                 } if (i === 1) {
                     verses +=
`${i} bottle of beer on the wall, ${i} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.


`
                } if (i === 0) {
                    verses +=
`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
            }
         }
        return verses;
    }
}

module.exports = BeerSong
const song = new BeerSong()
// console.log(song.verse(12))
console.log(song.sing(8, 2))


//VERSION WITHOUT TEMPLATE STRINGS - AS THE TEST FORMATTING IS TOUGH TO FIGURE OUT
// class BeerSong {

//     verse(num) {
//         // return this.sing(num)
//         if (num > 2) {
//             return ( 
// `${num} bottles of beer on the wall, ${num} bottles of beer.
// Take one down and pass it around, ${num - 1} bottles of beer on the wall.
// `)
//         } if (num === 2) {
//                 return (
// `${num} bottles of beer on the wall, ${num} bottles of beer.
// Take one down and pass it around, ${num - 1} bottle of beer on the wall.
// `)
//         } if (num === 1) {
//             return (
// `${num} bottle of beer on the wall, ${num} bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// `)
//         } if (num === 0) {
//             return (
// `No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// `)
//         }
//     }
    

//     sing(start, finish = 0) {
//         let verses = ''
//         for(let i = start; i >= finish; i--) {

//                 if (i > 2) {
//                     verses += 
// `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.\n\n`
//                 } if (i === 2) {
//                     verses +=
// `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottle of beer on the wall.\n\n`
//                  } if (i === 1) {
//                      verses +=
// `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\n`
//                 } if (i === 0) {
//                     verses +=
// `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
//             }
//          }
//         return verses;
//     }
// }

// module.exports = BeerSong
// const song = new BeerSong()
// // console.log(song.verse(12))
// console.log(song.sing(8, 2))



//SIMPLIFED VERSON SINCE THE INTERPOLATION WASN'T DYNAMIC FOR NUM < 3 ANYWAY
// module.exports = class BeerSong {

//     verse(num) {
//         let bottle = num => num === 1 ? 'bottle' : 'bottles'
//         if (num > 2) {
//             return ( 
// `${num} bottles of beer on the wall, ${num} bottles of beer.
// Take one down and pass it around, ${num - 1} bottles of beer on the wall.
// `)
//         } if (num === 2) {
//                 return (
// `2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// `)
//         } if (num === 1) {
//             return (
// `1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// `)
//         } if (num === 0) {
//             return (
// `No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// `)
//         }
//     }

//     sing(start, finish = 0) {
//         let verses = []
//         for(let i = start; i >= finish; i--) {
//            verses.push(this.verse(i))
//          }
//         return verses.join('\n');
//     }
// }


//2ND SUBMITTED ITERATION, INTERPOLATION < 3 DOESN'T DO ANYTHING DYNAMICALLY THAT COULDN'T BE
//HANDLED WITH EASIER TO REASON ABOUT STATIC STRINGS
// module.exports = class BeerSong {

//     verse(num) {
//         let bottle = num => num === 1 ? 'bottle' : 'bottles'
//         if (num > 2) {
//             return ( 
// `${num} ${bottle()} of beer on the wall, ${num} ${bottle()} of beer.
// Take one down and pass it around, ${num - 1} ${bottle()} of beer on the wall.
// `)
//         } if (num === 2) {
//                 return (
// `${num} ${bottle()} of beer on the wall, ${num} ${bottle()} of beer.
// Take one down and pass it around, ${num - 1} ${bottle(num-1)} of beer on the wall.
// `)
//         } if (num === 1) {
//             return (
// `${num} ${bottle(num)} of beer on the wall, ${num} ${bottle(num)} of beer.
// Take it down and pass it around, no more ${bottle()} of beer on the wall.
// `)
//         } if (num === 0) {
//             return (
// `No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// `)
//         }
//     }
    

//     sing(start, finish = 0) {
//         let verses = []
//         for(let i = start; i >= finish; i--) {
//            verses.push(this.verse(i))
//          }
//         return verses.join('\n');
//     }
// }









