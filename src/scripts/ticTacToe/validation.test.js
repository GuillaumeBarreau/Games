import React from 'react';
import ReactDOM from 'react-dom';
import {
 checkHorizontalWin, checkDiagonalRightWin, checkDiagonalLeftWin, checkVerticalWin, checkIfThereAWinner 
} from './validation';

describe('Validation test for TictacToe Game', () => {
    let initBoard;
    let currentPlayer;

    describe('Should return a true value only for the validate function checkHorizontalWin', () => {
        beforeEach(() => {
            initBoard = [
                ['O', 'O', 'X'],
                ['X', 'O', 'O'],
                ['X', 'X', 'X']
            ];

            currentPlayer = 'X';
        });

        it('Should return true for checkHorizontalWin function', () => {
            expect(checkHorizontalWin(initBoard, currentPlayer)).toBe(true);
        });

        it('Should return false for checkDiagonalRightWin function', () => {
            expect(checkDiagonalRightWin(initBoard, currentPlayer)).toBe(false);
        });

        it('Should return false for checkDiagonalLeftWin function', () => {
            expect(checkDiagonalLeftWin(initBoard, currentPlayer)).toBe(false);
        });

        it('Should return false for checkVerticalWin function', () => {
            expect(checkVerticalWin(initBoard, currentPlayer)).toBe(false);
        });
    });

    describe('Should return a true value only for the validate function checkDiagonalLeftWin', () => {
        beforeEach(() => {
            initBoard = [
                ['X', 'O', 'O'],
                ['O', 'X', 'O'],
                ['X', 'O', 'X']
            ];

            currentPlayer = 'X';
        });

        it('Should return false for checkHorizontalWin function', () => {
            expect(checkHorizontalWin(initBoard, currentPlayer)).toBe(false);
        });

        it('Should return false for checkDiagonalRightWin function', () => {
            expect(checkDiagonalRightWin(initBoard, currentPlayer)).toBe(false);
        });

        it('Should return true for checkDiagonalLeftWin function', () => {
            expect(checkDiagonalLeftWin(initBoard, currentPlayer)).toBe(true);
        });

        it('Should return false for checkVerticalWin function', () => {
            expect(checkVerticalWin(initBoard, currentPlayer)).toBe(false);
        });
    });

    describe('Should return a true value only for the validate function checkDiagonalRightWin', () => {
        beforeEach(() => {
            initBoard = [
                ['O', 'O', 'X'],
                ['O', 'X', 'O'],
                ['X', 'O', 'X']
            ];

            currentPlayer = 'X';
        });

        it('Should return false for checkHorizontalWin function', () => {
            expect(checkHorizontalWin(initBoard, currentPlayer)).toBe(false);
        });

        it('Should return true for checkDiagonalRightWin function', () => {
            expect(checkDiagonalRightWin(initBoard, currentPlayer)).toBe(true);
        });

        it('Should return false for checkDiagonalLeftWin function', () => {
            expect(checkDiagonalLeftWin(initBoard, currentPlayer)).toBe(false);
        });

        it('Should return false for checkVerticalWin function', () => {
            expect(checkVerticalWin(initBoard, currentPlayer)).toBe(false);
        });
    });

    describe('Should return a true value only for the validate function checkVerticalWin', () => {
        beforeEach(() => {
            initBoard = [
                ['X', 'O', 'X'],
                ['X', 'O', 'O'],
                ['X', 'X', 'O']
            ];

            currentPlayer = 'X';
        });

        it('Should return false for checkHorizontalWin function', () => {
            expect(checkHorizontalWin(initBoard, currentPlayer)).toBe(false);
        });

        it('Should return false for checkDiagonalRightWin function', () => {
            expect(checkDiagonalRightWin(initBoard, currentPlayer)).toBe(false);
        });

        it('Should return false for checkDiagonalLeftWin function', () => {
            expect(checkDiagonalLeftWin(initBoard, currentPlayer)).toBe(false);
        });

        it('Should return true for checkVerticalWin function', () => {
            expect(checkVerticalWin(initBoard, currentPlayer)).toBe(true);
        });
    });

    describe('Should return a true value for all functions ', () => {
        beforeEach(() => {
            initBoard = [
                ['X', 'X', 'X'],
                ['X', 'X', 'X'],
                ['X', 'X', 'X']
            ];

            currentPlayer = 'X';
        });

        it('Should return true for checkHorizontalWin function', () => {
            expect(checkHorizontalWin(initBoard, currentPlayer)).toBe(true);
        });

        it('Should return false for checkDiagonalRightWin function', () => {
            expect(checkDiagonalRightWin(initBoard, currentPlayer)).toBe(true);
        });

        it('Should return false for checkDiagonalLeftWin function', () => {
            expect(checkDiagonalLeftWin(initBoard, currentPlayer)).toBe(true);
        });

        it('Should return false for checkVerticalWin function', () => {
            expect(checkVerticalWin(initBoard, currentPlayer)).toBe(true);
        });
    });

    describe('Should return a true value if there a winner', () => {
        beforeEach(() => {
            initBoard = [
                ['O', 'O', 'X'],
                ['X', 'O', 'O'],
                ['X', 'X', 'X']
            ];

            currentPlayer = 'X';
        });

        it('Should return a true value for checkIfThereAWinner function', () => {
            expect(checkIfThereAWinner(initBoard, currentPlayer)).toBe(true);
        });
    });

    describe('Should return a false value if thre a not winnner', () => {
        beforeEach(() => {
            initBoard = [
                ['O', 'O', 'X'],
                ['X', 'O', 'O'],
                ['O', 'X', 'X']
            ];

            currentPlayer = 'X';
        });

        it('Should return a false value for checkIfThereAWinner function', () => {
            expect(checkIfThereAWinner(initBoard, currentPlayer)).toBe(false);
        });
    });
});
