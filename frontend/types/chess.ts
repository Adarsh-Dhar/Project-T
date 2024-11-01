export type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
export type PieceColor = 'white' | 'black';

export interface ChessPiece {
  type: PieceType;
  color: PieceColor;
  position: string; // e.g., "e4"
}

export interface ChessGameState {
  board: Map<string, ChessPiece>;
  currentTurn: PieceColor;
  isCheck: boolean;
  isCheckmate: boolean;
  lastMove?: {
    from: string;
    to: string;
    piece: ChessPiece;
  };
}

export interface ChessMove {
  from: string;
  to: string;
  piece: ChessPiece;
} 