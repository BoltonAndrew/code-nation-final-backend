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
//     const user = await User.findOne({email : "test3@3.com"});
//     console.log(user)
// }
// findUser();