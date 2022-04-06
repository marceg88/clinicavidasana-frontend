import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ConnectionAPI } from '../services/connetionAPI';

export const registerCard = createAsyncThunk('payment/registerCard', (data) =>
  ConnectionAPI.registerCard(data)
);

export const registerPayment = createAsyncThunk(
  'payment/registerPayment',
  (data) => ConnectionAPI.registerPayment(data)
);
const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    // formType: 'registerCard',
    currentCard: JSON.parse(window.localStorage.getItem('payment')) || null,
    // registerCardForm: {
    //   number: '',
    //   expYear: '',
    //   month: '',
    //   cvc: ''
    // },
    registerCardState: {
      message: '',
      status: ''
    },
    registerPaymentState: {
      message: '',
      status: ''
    }
  },
  reducers: {
    setPaymentFormType(state, action) {
      state.formType = action.payload;
    },
    setRegisterCardFormValues(state, action) {
      state.registerCardForm = {
        ...state.registerCardForm,
        ...action.payload
      };
    },
    setRegisterPaymentFormValues(state, action) {
      state.registerPaymentForm = {
        ...state.registerPaymentForm,
        ...action.payload
      };
    },
    resetPaymentMethods(state, action) {
      state[action.payload].status = '';
      state[action.payload].message = '';
    },
    setCurrentCard(state, action) {
      state.currentCard = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCard.fulfilled, (state, action) => {
        console.log('registerCard', action.payload);
        const { message, status } = action.payload;
        state.registerCardState = {
          message,
          status
        };
        window.localStorage.setItem(
          'payment',
          JSON.stringify(action.payload.data)
        ),
          (state.currentCard = action.payload.data);
      })
      .addCase(registerPayment.fulfilled, (state, action) => {
        console.log('registerPayment', action.payload);
        const { message, status } = action.payload;
        state.registerPaymentState = {
          message,
          status
        };
      });
  }
});

export const {
  setPaymentFormType,
  setRegisterCardFormValues,
  setRegisterPaymentFormValues,
  resetPaymentMethods,
  setCurrentCard
} = paymentSlice.actions;

export const selectPayment = (state) => state.payment;
export const selectRegisterCardForm = (state) => state.payment.registerCardForm;
export const selectRegisterCardState = (state) =>
  state.payment.registerCardState;
export const selectRegisterPaymentState = (state) =>
  state.payment.registerPaymentState;

export default paymentSlice.reducer;
