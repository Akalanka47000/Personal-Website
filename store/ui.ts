import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  skills: {
    hoveredCard: null,
  },
}

export const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setHoveredCard(state, action) {
      state.skills.hoveredCard = action.payload
    },
  },
})

export const { setHoveredCard } = slice.actions

export default slice.reducer
