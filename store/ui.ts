import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  skills: {
    hoveredCard: null,
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setHoveredCard(state, action) {
      state.skills.hoveredCard = action.payload
    },
  },
})

export const { setHoveredCard } = uiSlice.actions

export default uiSlice.reducer
