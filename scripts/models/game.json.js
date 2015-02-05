/*jslint browser: true, devel: true*/
/*globals angular, _*/
/**
 * Model for bord tiles
 */
(function () {
    angular.module('lbApp')
        .factory('gameModel', function () {
            var game = {
                'gamePhase': 'playing',
                'playersAmount': 1,
                'players': {
                    player1 : {
                        "name": "Bobby",
                        "properties": {},
                        "ownedProperties" : 0,
                        'id' : 1,
                        "balance" : 100
                    }
                },
                'currentTurn': {
                    'player' : '',
                    'canRoll': true
                },
                'currentPlayerDice': {
                    'dice1': 0,
                    'dice2': 0
                }
            };
            return game;
        });
})();
