// import { clearForm, loginFailure, setErrors } from "../reducers/userSlice";

// //    Simulation de la connection
// export const loginUsers =
//     (username, password, rememberMe) => async (dispatch) => {
//         try {
//             if (username === "testuser" && password === "password") {
//                 dispatch(clearForm());
//                 return;
//             } else {
//                 dispatch(loginFailure("Invalid username or password"));
//             }
//         } catch (error) {
//             dispatch(setErrors(error.message));
//         }
//     };
