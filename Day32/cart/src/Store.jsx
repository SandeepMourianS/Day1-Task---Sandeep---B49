import { configureStore } from '@reduxjs/toolkit';
import operationSlice from './OperationSlice';

const store = configureStore({
    reducer: {
        operation : operationSlice,
    }
})

export default store;