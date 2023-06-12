import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid"; 

const contactInitialState = [];
    // userName: '',
    // userNumber: ''



const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    reducers: {
        // newName: (state,{payload}) => {
        //  state.userName = payload   
        // },
        // newNumber: (state, { payload }) => {
        //  state.userNumber =  payload   
        // },
        addContact: {
            reducer(state, { payload }) {state.push(payload)},
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        userName: name,
                        userNumber: number
                    }
                }
            }
        }     
    }
})

export const contactReducer = contactsSlice.reducer;
export const {newName,newNumber,addContact} = contactsSlice.actions; 