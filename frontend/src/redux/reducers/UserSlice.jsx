import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk pour récupérer les données utilisateur
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST", // méthode POST pour récupérer le profil
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        // gère les erreurs si la réponse n'est pas OK
        return rejectWithValue(data.message);
      }

      return data.body; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

// Thunk pour mettre à jour les données utilisateur
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ token, userName, firstName, lastName }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT", // méthode PUT pour mettre à jour le profil
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, firstName, lastName }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Gère les erreurs si la réponse n'est pas OK
        return rejectWithValue(data.message);
      }

      return data.body; 
    } catch (error) {
      return rejectWithValue(error.message); // Gère les erreurs réseau
    }
  }
);

// Slice Redux pour gérer l'état utilisateur
const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    firstName: "",
    lastName: "",
    // Signale que l'appli n'est ni en cours de chargement, ni en erreur, ni réussie.
    status: "idle", // idle | loading | succeeded | failed
    error: null,
 },
  reducers: {
    clearUser: (state) => {
      state.userName = "";
      state.firstName = "";
      state.lastName = "";
    },
 },

// export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             state.userName = action.payload.userName;
//             state.firstName = action.payload.firstName;
//             state.lastName = action.payload.lastName;
//         },
//         clearUser: (state) => {
//             state.userName = "";
//             state.firstName = "";
//             state.lastName = "";
//         },
//     },
// });

  extraReducers: (builder) => {
    // Gère les états du thunk fetchUserProfile
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Gère les états du thunk updateUserProfile
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
export { userSlice };
