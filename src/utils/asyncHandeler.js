// first approach
// const asyncHandeler = (fnc) => async (req, res, next) => {
//     try {
//         await fnc(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
// };

// Second Approach
const asyncHandeler = (reqHandeler) => {
  (req, res, next) => {
    Promise.resolve(reqHandeler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandeler };
