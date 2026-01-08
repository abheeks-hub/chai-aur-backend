// const asyncHandler = ()=>{};

// export {asyncHandler};

// const asyncHandler = ()=>{}
// const asyncHandler = (func)=>{ async()=>{}}

// ------------- Promise-Resolve method ----------------
// requestHandler -> this is just a demo function name which doesn't exists now

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// ------------- Try-Catch method ----------------

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (error) {
//     res.status(error.code).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
export { asyncHandler };
