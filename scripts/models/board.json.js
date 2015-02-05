/*jslint browser: true, devel: true*/
/*globals angular, _*/
/**
 * Model for bord tiles
 */
(function () {
    angular.module('lbApp')
        .factory('boardModel', function () {
            var board = {
                tiles: {
                    1: {
                        "id": 1,
                        "label": "Start"
                    },
                    2: {
                        "id": 2,
                        "label": "Tile2",
                        "price": "12"
                    },
                    3: {
                        "id": 3,
                        "label": "Tile3",
                        "price": "14"
                    },
                    4: {
                        "id": 4,
                        "label": "Tile4",
                        "price": "20"
                    },
                    5: {
                        "id": 5,
                        "label": "Tile5",
                        "price": "22"
                    },
                    6: {
                        "id": 6,
                        "label": "Tile6",
                        "price": "24"
                    },
                    7: {
                        "id": 7,
                        "label": "Tile7",
                        "price": "28"
                    },
                    8: {
                        "id": 8,
                        "label": "Tile8",
                        "price": "30"
                    } ,
                    9: {
                        "id": 9,
                        "label": "Tile9",
                        "price": "32"
                    },
                    10: {
                        "id": 10,
                        "label": "Tile10",
                        "price": "36"
                    }/*,
                    11: {
                        "id": 11,
                        "label": "Tile11",
                        "price": "38"
                    },
                    12: {
                        "id": 12,
                        "label": "Tile12",
                        "price": "45"
                    },
                    13: {
                        "id": 13,
                        "label": "Tile13",
                        "price": "50"
                    }*/
                }
            };


            board.length = (function () {
                var key, count = 0;
                for(key in board.tiles) {
                    if(board.tiles.hasOwnProperty(key)) {
                        count++;
                    }
                }
                return count;
            }) ();

            return board;
        });
})();
