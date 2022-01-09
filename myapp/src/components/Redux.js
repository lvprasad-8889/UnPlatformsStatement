import { configureStore, createSlice } from "@reduxjs/toolkit";

//initialising the data
let data = [
  {
    views: 0,
    likes: 0,
    comments: [],
    shares: 0,
  },
];
//variable to display comment box
const displayComment = false;

//initialising
const commentsData = [];

//creating reducers
const redux = createSlice({
  name: "data",
  initialState: { data, commentsData },
  reducers: {
    getData(state, action) {
      state.data = [...action.payload];
    },
    getComment(state) {
      state.displayComment = !state.displayComment;
    },
    getCommentData(state, action) {
      state.commentsData = [...action.payload];
    },
  },
});

//creating actions
export const actions = redux.actions;

//creating store
const store = configureStore({
  reducer: redux.reducer,
});

export default store;
