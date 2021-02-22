// require("./src/db/connection");
// const { Movies } = require("./src/models/Movies")

// Create a test movie in db manually
// const createMovie = async () => {
//     try {
//         data = {
//             id: "11111",
//             title: "fight Club",
//             userLikes: ["1234", "12345"],
//             userRates: [{userId: "1234", rate: "5"}, {userId: "12345", rate:"3"}]
//         }
//         const movie = new Movies(data);
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