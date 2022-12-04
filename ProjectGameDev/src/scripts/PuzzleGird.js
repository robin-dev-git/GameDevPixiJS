import * as PIXI from 'pixi.js';
import { PuzzleGirdConfig } from './PuzzleGirdConfig';
import { PuzzlePiece } from './PuzzlePiece';

export class PuzzleGird {
    constructor() {
        this.container = new PIXI.Container();
        this.container.x = window.innerWidth / 2;
        this.container.y = window.innerHeight / 2;
        this.createPuzzlePieces();
    }

    createPuzzlePieces() {
        this.pieces = [];

        let ids = PuzzleGirdConfig.map((field) => field.id);

        PuzzleGirdConfig.forEach((field) => {
            const random = Math.floor(Math.random() * ids.length);
            const id = ids[random];
            ids = ids.filter((item) => item !== id);

            const piece = new PuzzlePiece(field.id, field);
            this.container.addChild(piece.sprite);
            this.pieces.push(piece);
        });
    }
}
