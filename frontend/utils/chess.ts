import { ChessPiece, ChessGameState, PieceType, PieceColor } from '../types/chess';

export const getInitialBoard = (): Map<string, ChessPiece> => {
  const board = new Map<string, ChessPiece>();
  
  // Set up pawns
  for (let file of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
    board.set(`${file}2`, { type: 'pawn', color: 'white', position: `${file}2` });
    board.set(`${file}7`, { type: 'pawn', color: 'black', position: `${file}7` });
  }
  
  // Set up other pieces
  const pieces: PieceType[] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
  pieces.forEach((piece, index) => {
    board.set(`${files[index]}1`, { type: piece, color: 'white', position: `${files[index]}1` });
    board.set(`${files[index]}8`, { type: piece, color: 'black', position: `${files[index]}8` });
  });
  
  return board;
};

export const getPieceImage = (piece: ChessPiece): string => {
  return `/chess-pieces/${piece.color}-${piece.type}.svg`;
};

export const getInitialGameState = (): ChessGameState => {
  return {
    board: getInitialBoard(),
    currentTurn: 'white',
    isCheck: false,
    isCheckmate: false
  };
};

export const isValidMove = (
  from: string,
  to: string,
  gameState: ChessGameState
): boolean => {
  // Implement chess move validation logic here
  // This is a placeholder that needs proper implementation
  return true;
}; 