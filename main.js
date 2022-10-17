let lab1 = [5, 5, 5, 5, 10, 10]
let lab2 = [5, 5, 5, 5, 5, 5, 10]
let lab3 = [5, 10, 10, 15]
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 0]
let lab6 = [5, 5, 10, 0, 5, 10]

 let sum1 = 0
 for (let i = 0; i < lab1.length; i++){
    sum1 += lab1[i]
 }

 let sum2 = 0
 for (let i = 0; i < lab2.length; i++){
    sum2 += lab2[i]
 }

 let sum3 = 0
 for (let i = 0; i < lab3.length; i++){
    sum3 += lab3[i]
 }

 let sum4_5 = 0
 for (let i = 0; i < lab4_5.length; i++){
    sum4_5 += lab4_5[i]
 }

 let sum6 = 0
 for (let i = 0; i < lab6.length; i++){
    sum6 += lab6[i]
 }

 let sums = [sum1, sum2, sum3, sum4_5, sum6]

let sums_avg = 0

for (let i = 0; i < sums.length; i++){
    sums_avg += sums[i]
}

sums_avg = sums_avg / 6 / 40 * 100

 quiz1 = 36/40*100

 total_score = quiz1 * 0.4 + sums_avg*0.6

 const results = {
    lab1: lab1, // array of scores for lab1
    lab2: lab2, // array of scores for lab2
    lab3: lab3, // array of scores for lab3
    lab4_5: lab4_5, // array of scores for lab4 and 5
    lab6: lab6, // array of scores for lab6
    quiz1: quiz1 , // score of quiz1
    sums: sums, // array of sums of each lab
    total_score: total_score, // computed total score
    }
console.log(results)