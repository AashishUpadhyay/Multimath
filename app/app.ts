import { Player } from './player';
import { Game } from './game';
import * as Helpers from './Utility';

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    let player: Player = new Player();
    player.name = Helpers.getValue('playername');

    let problemCount: number = Number(Helpers.getValue('problemCount'));
    let factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});