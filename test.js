// require("./src/db/connection");
// const { Movie } = require("./src/models/Movie")
// const { User } = require("./src/models/Users")

// Create a test movie in db manually
// const createMovie = async () => {
//     try {
//         data = {
//             id: "11111",
//             title: "fight Club",
//             userLikes: ["1234", "12345"],
//             userRates: [{userId: "1234", rate: "5"}, {userId: "12345", rate:"3"}]
//         }
//         const movie = new Movie(data);
//         const savedMovie = await movie.save();
//         console.log(savedMovie);
//     } catch (error) {
//         if(error.code == 11000) {
//             console.log("Movie exists!");
//         } else {
//             console.log("Couldn not connect");
//         }
//     }
// };
// createMovie();
//**--------------------------------------------------------------------------------- */
// const findUser = async () => {
//     const user = await User.findOne({userName: "test3"});
//     console.log(user.acceptedMovies)
// }
// findUser();


// const arr1 = ["ahmet", "veli", "sam"]
// const arr2 = ["sam", "kaz", "mel", "sam"]

// console.log(arr1.concat(arr2).sort())

//find duplicate
// let strArray = arr1.concat(arr2);
// let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
// console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates

// find matched element in array

// arr1.forEach((el)=> {
//     arr2.forEach((el2)=>{
//         if (el == el2) {
//             console.log(el)
//         }
//     })
// })

let arr1 = ["1", "2", "3"]
let arr2 = ["2", "3"]
let bool = false
console.log(arr1.filter((item)=>{
   if(!arr2.includes(item)) {return item}
    // return item arr2.includes(item)
 }))
