import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import serviceReducer from './serviceSlice';
import paymentReducer from './paymentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    service: serviceReducer,
    payment: paymentReducer
  }
});
