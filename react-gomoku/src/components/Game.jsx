import React, { useReducer } from 'react';
import Board from './Board';
import Info from './Info';
import MessageBox from './MessageBox';


export const GAME_START = 'GAME_START';
export const UPDATE_BOARD = "UPDATE_BOARD";
export const UPDATE_TURN = "UPDATE_TURN";
export const RESET_BOARD = "RESET_BOARD";


const initialState = {
  ready: true,
  turn: 0,  // 0: 검은돌  1: 흰돌
  board: new Array(10).fill(null).map((_) => new Array(10).fill(-1)),
};


const reducer = (state, action) => {
  switch (action.type) {
    case GAME_START: {
      // 게임 시작!!!
      return { ...state, ready: false };
    }
    case UPDATE_BOARD: {
      // 2D array 갱신
      const { row, col } = action.coordinate;
      const newBoard = [...state.board];
      newBoard[row] = [...newBoard[row]];
      newBoard[row][col] = state.turn;

      return { ...state, board: newBoard };
    }
    case UPDATE_TURN: {
      // 순서 변경
      const flipped = state.turn ^ 1;
      return { ...state, turn: flipped };
    }
    case RESET_BOARD: {
      // 게임판 초기화
      const newBoard = new Array(10).fill(null).map((_) => new Array(10).fill(-1));
      return { ready: true, turn: 0, board: newBoard };
    }
    default: {
      throw new Error("unexpected error");
    }
  }
};

const Game = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Board state={state} dispatch={dispatch} />
      <MessageBox state={state} dispatch={dispatch} />
      <Info ready={state.ready} turn={state.turn} dispatch={dispatch} />
    </>
  )
};


export default Game;
