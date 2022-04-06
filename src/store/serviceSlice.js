import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ConnectionAPI } from '../services/connetionAPI';

//Thunks
export const registerService = createAsyncThunk(
  'service/registerService',
  (data) => ConnectionAPI.registerService(data)
);

export const findServiceById = createAsyncThunk(
  'service/findServiceById',
  (serviceId) => ConnectionAPI.findServiceById(serviceId)
);
export const editService = createAsyncThunk('service/editService', (data) =>
  ConnectionAPI.editService(data)
);
export const deleteService = createAsyncThunk(
  'service/deleteService',
  (serviceId) => ConnectionAPI.deleteService(serviceId)
);

export const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    service: JSON.parse(window.localStorage.getItem('service')) || null,
    registerServiceState: {
      message: '',
      status: ''
    },
    findServiceByIdState: {
      message: '',
      status: ''
    },
    editServiceState: {
      message: '',
      status: ''
    },
    deleteServiceState: {
      message: '',
      status: ''
    }
  },
  reducers: {
    resetServiceMethodsMessage(state, action) {
      state[action.payload].message = '';
      state[action.payload].status = '';
    },
    setService(state, action) {
      state.service = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerService.fulfilled, (state, action) => {
        console.log('registerService', action.payload);
        const { message, status } = action.payload;
        state.registerServiceState = {
          message,
          status
        };
      })
      .addCase(findServiceById.fulfilled, (state, action) => {
        console.log('findServiceById', action.payload);
        const { message, status } = action.payload;
        state.findServiceByIdState = {
          message,
          status
        };
        if (status === 'Failed') state.service = null;
        if (status === 'OK') {
          window.localStorage.setItem(
            'service',
            JSON.stringify(action.payload.data)
          ),
            window.localStorage.setItem('token', action.payload.data.token),
            (state.service = action.payload.data);
        }
      })
      .addCase(editService.fulfilled, (state, action) => {
        console.log('editService', action.payload);
        const { message, status } = action.payload;
        state.editServiceState = {
          message,
          status
        };
        if (status === 'OK') {
          window.localStorage.setItem(
            'service',
            JSON.stringify(action.payload.data)
          ),
            window.localStorage.setItem('token', action.payload.data.token),
            (state.service = action.payload.data);
        }
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        console.log('deleteService', action.payload);
        const { message, status } = action.payload;
        state.deleteServiceState = {
          message,
          status
        };
        action.service = null;
      });
  }
});

export const { resetServiceMethodsMessage, setService } = serviceSlice.actions;

export const selectService = (state) => state.service.service;
export const selectRegisterServiceState = (state) =>
  state.service.registerServiceState;
export const selectFindServiceByIdState = (state) =>
  state.service.findServiceById;
export const selectEditServiceState = (state) => state.service.editServiceState;
export const selectDeleteServiceState = (state) =>
  state.service.deleteServiceState;

export default serviceSlice.reducer;
