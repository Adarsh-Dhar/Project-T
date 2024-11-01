import React from 'react';
import { ChessPiece } from '../../types/chess';
import { getPieceImage } from '../../utils/chess';

interface ChessSquareProps {
  position: string;
  piece?: ChessPiece;
  isSelected: boolean;
  isLight: boolean;
  onClick: () => void;
}

const ChessSquare: React.FC<ChessSquareProps> = ({
  position,
  piece,
  isSelected,
  isLight,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-20 h-20 flex items-center justify-center relative
        ${isLight ? 'bg-amber-100' : 'bg-amber-800'}
        ${isSelected ? 'ring-4 ring-blue-500' : ''}
        hover:opacity-90 cursor-pointer transition-all
      `}
    >
      {piece && (
        <img
          src={getPieceImage(piece)}
          alt={`${piece.color} ${piece.type}`}
          className="w-16 h-16 object-contain"
        />
      )}
      {/* Position indicator on bottom-right corner */}
      <span className="absolute bottom-1 right-1 text-xs opacity-50">
        {position}
      </span>
    </div>
  );
};

export default ChessSquare; 