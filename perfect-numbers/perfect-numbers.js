module.exports = class PerfectNumbers {
    classify(num) {
        if(num <= 0) return 'Classification is only possible for natural numbers.'
        let i = 0, factors = [];
        while (i < num) {
            if(num % i === 0) factors.push(i)
            i++
        }
        let total = factors.reduce((sum, item) => sum + item, 0)
        if (total === num) return 'perfect'
        else if (total > num) return 'abundant'
        else return 'deficient'
    }
}

