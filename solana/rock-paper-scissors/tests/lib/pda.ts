import { Program, web3 } from "@coral-xyz/anchor";
import { RockPaperScissors } from "../../target/types/rock_paper_scissors";
import { b, encode } from "./encoding";

export const buildSettingsPda = (program: Program<RockPaperScissors>) =>
  web3.PublicKey.findProgramAddressSync([b`settings`], program.programId);

export const buildGamePda = (
  program: Program<RockPaperScissors>,
  player: web3.PublicKey,
  gameId: string
) =>
  web3.PublicKey.findProgramAddressSync(
    [b`game`, player.toBuffer(), encode(gameId)],
    program.programId
  );

export const buildEscrowPda = (
  program: Program<RockPaperScissors>,
  game: web3.PublicKey,
  player: web3.PublicKey
) =>
  web3.PublicKey.findProgramAddressSync(
    [b`game_escrow`, game.toBuffer(), player.toBuffer()],
    program.programId
  );
