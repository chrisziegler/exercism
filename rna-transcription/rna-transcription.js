class DnaTranscriber {
  
    toRna(input) {
       let pattern = input.match(/[ACGT]+/)
       //  !pattern checks if null for 'XXX' test
       if (!pattern || input !==  pattern[0]) {
        throw new Error ('Invalid input')
       }

       const dna = [...input]
        for (let i = 0; i < dna.length; i++) {
                (dna[i] === 'G') ? dna[i] = 'C' : (dna[i] === 'C') ? dna[i] = 'G' : 
                (dna[i] === 'T') ? dna[i] = 'A' :   dna[i] = 'U' 
          }
        return dna.join('');
    }
}
module.exports = DnaTranscriber

//run to test in terminal $node rna-transcription.js
const dnaTranscriber = new DnaTranscriber
console.log(dnaTranscriber.toRna('ACGT'))