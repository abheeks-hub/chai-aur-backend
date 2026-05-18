import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadonCloudinary } from "../utils/cloudinary.js";
const registerUser = asyncHandler(async (req, res) => {
  // get user details from the frontend
  const { fullname, email, username, password } = req.body;
  console.log("email: ", email);
  console.log("passowrd: ", password);
  console.log("fullName: ", fullname);

  // validation: not empty
  if (
    [fullname, email, username, password].some((fields) => {
      return fields?.trim() === "";
    })
  ) {
    throw new ApiError(400, " 🚨 All fields are MANDATORY");
  }
  // check if user already exists: username, email
  const existingUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existingUser) {
    throw new ApiError(409, "User with email or username already exists ⚠️");
  }
  // check for images check for avatar
  const avatarlocalpath = req.fields?.avatar[0]?.path; // optionally chaining
  const coverImagelocalpath = req.files?.avatar[0]?.path;
  if (!avatarlocalpath) {
    throw new ApiError(400, "avatar needed!!");
  }
  // upload them on cloudinary, avatar -> multer picks up the image
  const avatar = await uploadonCloudinary(avatarlocalpath);
  const coverImage = await uploadonCloudinary(coverImagelocalpath);
  // create user object -> db CREATE call new entry
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    username: username.toLowerCase(),
    password,
  });
  // remove the password, email and refresh token fields from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshTokens "
  );
  // check for user creation return response otherwise return error
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }
  // return response (succesfully created user)
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

// const loginUser = asyncHandler(async (req, res)=>{
//     res.status(200).json({
//         message: "OK"
//     })
// })
export { registerUser };
// export {loginUser};
