/*
 declOfNum(count, ['1 - Яблоко', '2 - Яблока', '10 - Яблок'])
 */

function Decl(number, titles) {
    number = parseInt(number)

    const cases = [2, 0, 1, 1, 1, 2]

    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

export default Decl