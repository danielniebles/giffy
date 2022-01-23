import { useReducer } from "react"

const reducer = (state, action) => {
  return {
    ...state,
    keyword: action.type === 'keyword' ? action.payload : state.keyword,
    rating: action.type === 'rating' ? action.payload : state.rating,
  }
}

export default function useForm({ initialKeyword, initialRating }){
  const [ state, dispatch ] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0
  })
  const { keyword, rating } = state

  return {
    keyword,
    rating,
    updateKeyword: keyword => dispatch({ type: 'keyword', payload: keyword }),
    updateRating: rating => dispatch({ type: 'rating', payload: rating })

  }
}