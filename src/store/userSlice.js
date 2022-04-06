import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ConnectionAPI } from '../services/connetionAPI';

//Thunks
export const register = createAsyncThunk('user/register', (data) =>
  ConnectionAPI.registrarUsuario(data)
);

export const signIn = createAsyncThunk('user/signIn', (data) =>
  ConnectionAPI.ingresarUsuario(data)
);

export const findUserById = createAsyncThunk('user/findUserById', (userId) =>
  ConnectionAPI.findById(userId)
);

export const findServiceByPatient = createAsyncThunk(
  'user/findServiceByPatient',
  (userId) => ConnectionAPI.findServiceByPatient(userId)
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(window.localStorage.getItem('user')) || null,
    registerState: {
      message: '',
      status: ''
    },
    signInState: {
      message: '',
      status: ''
    },
    findUserByIdState: {
      message: '',
      status: ''
    },
    findServiceByPatientState: {
      message: '',
      status: ''
    }
  },
  reducers: {
    logout(state) {
      state.user = null;
      window.localStorage.clear();
    },
    resetUserMethodsMessage(state, action) {
      state[action.payload].message = '';
      state[action.payload].status = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log('register', action.payload);
        const { message, status } = action.payload;
        state.registerState = {
          message,
          status
        };
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.log('signIn', action.payload);
        const { message, status } = action.payload;
        state.signInState = {
          message,
          status
        };
        if (status === 'Failed') state.user = null;
        if (status === 'OK') {
          window.localStorage.setItem(
            'user',
            JSON.stringify(action.payload.data)
          ),
            window.localStorage.setItem('token', action.payload.data.token),
            (state.user = action.payload.data);
        }
      })
      .addCase(findUserById.fulfilled, (state, action) => {
        console.log('findUserById', action.payload);
        const { message, status } = action.payload;
        state.findUserByIdState = {
          message,
          status
        };
      })
      .addCase(findServiceByPatient.fulfilled, (state, action) => {
        console.log('findServiceByPatient', action.payload);
        const { message, status } = action.payload;
        state.findServiceByPatientState = {
          message,
          status
        };
        state.user.services = action.payload.data;
      });
  }
});

export const { resetUserMethodsMessage, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectRegisterState = (state) => state.user.registerState;
export const selectSignInState = (state) => state.user.signInState;
export const selectFindUserByIdState = (state) => state.user.findUserByIdState;
export const selectFindServiceByPatient = (state) =>
  state.user.findServiceByPatientState;

export default userSlice.reducer;
