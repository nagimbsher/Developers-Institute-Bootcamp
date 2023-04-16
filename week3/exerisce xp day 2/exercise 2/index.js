// 🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : 

const myWatchedSeries = ["black mirror","money heist","the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
const myWatchedSeriesLength = myWatchedSeries.Length
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

const myWatchedSeriesSentence =`${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`
const sentence = `I have watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`
console.log (sentence)

 myWatchedSeries[2] = "friends"
 console.log(myWatchedSeries)
 myWatchedSeries.push("breaking bad")
 myWatchedSeries.unshift("better call saul")
 delete myWatchedSeries[1] 
 const moneyHeist =myWatchedSeries[2]
 console.log(myWatchedSeries)
 console.log(moneyHeist[2])
 console.log(myWatchedSeries)
