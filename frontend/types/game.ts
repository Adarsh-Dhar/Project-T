export interface Player {
  address: string;
  stake: number;
}

export interface GameState {
  gameState: number; // 0 = not started, 1 = in progress, 2 = completed
  currentPlayers: number;
  totalPot: number;
  players: Player[];
} 