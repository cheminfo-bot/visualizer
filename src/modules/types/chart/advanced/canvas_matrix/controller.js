'use strict';

define([
    'jquery',
    'modules/default/defaultcontroller',
    'lodash'
], function ($, Default, _) {

    function Controller() {
    }

    $.extend(true, Controller.prototype, Default);

    Controller.prototype.moduleInformation = {
        name: 'Matrix display',
        description: 'Display an array of array as a colored matrix',
        author: 'Norman Pellet',
        date: '24.12.2013',
        license: 'MIT',
        cssClass: 'canvas_matrix'
    };

    Controller.prototype.getMatrixElementFromEvent = function (e) {

        var moduleValue;
        if (!(moduleValue = this.module.getDataFromRel('matrix'))) {
            return false;
        }

        var pxPerCell = this.module.view.getPxPerCell();
        var shift = this.module.view.getXYShift();


        e.offsetX = (e.offsetX || e.pageX - $(e.target).offset().left);
        e.offsetY = (e.offsetY || e.pageY - $(e.target).offset().top);

        var x = Math.floor((e.offsetX - shift.x) / pxPerCell);
        var y = Math.floor((e.offsetY - shift.y) / pxPerCell);

        var gridData = moduleValue.get();
        gridData = gridData.data ? gridData.data : gridData;

        if (!gridData || !gridData[0] || x < 0 || y < 0 || y > gridData.length || x > gridData[0].length) {
            return false;
        }

        return [x, y];

    };

    function getHandlerForEvent(controller, name) {
        return function handleEvent(e) {
            var keyed = controller.getMatrixElementFromEvent(e);

            if (!keyed) {
                return;
            }

            controller.setVarFromEvent(name, 'row', 'matrix', ['xLabel', keyed[1]]);
            controller.setVarFromEvent(name, 'col', 'matrix', ['yLabel', keyed[0]]);

            var intersect = [keyed[1], keyed[0]];
            var data = controller.module.getDataFromRel('matrix').get();
            if (data.data) {
                data = data.data;
                intersect.unshift('data');
            }

            controller.setVarFromEvent(name, 'intersect', 'matrix', intersect);

            if (typeof data[keyed[0]] === 'undefined') {
                return;
            }

            controller.createDataFromEvent(name, 'point', {
                row: keyed[1],
                column: keyed[0],
                value: data[keyed[0]][keyed[1]]
            });

            controller.createDataFromEvent(name, 'fullRow', data[keyed[1]].slice());

            var l = data[0].length;
            var col = new Array(l);
            for (var i = 0; i < l; i++) {
                col[i] = data[i][keyed[0]];
            }
            controller.createDataFromEvent(name, 'fullCol', col);
        };
    }

    Controller.prototype.initEvents = function () {

        var dom = $(this.module.getDomContent());

        dom.on('mousemove', 'canvas', _.debounce(getHandlerForEvent(this, 'onPixelHover'), 25));
        dom.on('click', 'canvas', getHandlerForEvent(this, 'onPixelClick'));

    };

    Controller.prototype.references = {
        row: {
            label: 'Row index'
        },
        fullRow: {
            label: 'Full row'
        },
        col: {
            label: 'Column index'
        },
        fullCol: {
            label: 'Full column'
        },
        intersect: {
            label: 'Intersection value'
        },
        point: {
            label: 'Coordinates and value'
        },
        matrix: {
            label: 'Matrix',
            description: 'A 2D array representing the matrix',
            type: ['matrix', 'object', 'array']
        }
    };

    Controller.prototype.variablesIn = ['matrix'];

    Controller.prototype.events = {
        onPixelHover: {
            label: 'Hover on a pixel',
            description: 'When the mouses moves over a new pixel of the data matrix',
            refVariable: ['row', 'col', 'intersect', 'point', 'fullRow', 'fullCol']
        },
        onPixelClick: {
            label: 'Click on a pixel',
            description: 'When the users click on any pixel',
            refVariable: ['row', 'col', 'intersect', 'point', 'fullRow', 'fullCol']
        }/*,
         onPixelDblClick: {
         label: 'double click on a pixel',
         description: 'When the user double clics on any pixel',
         refVariable: ['row', 'col', 'intersect']
         }*/
    };

    Controller.prototype.configurationStructure = function () {
        return {
            groups: {
                group: {
                    options: {
                        type: 'list'
                    },
                    fields: {
                        highcontrast: {
                            'default': 'true',
                            type: 'checkbox',
                            title: 'Contrast',
                            options: {'true': 'Take data min/max as boundaries'}
                        },
                        color: {
                            type: 'color',
                            title: 'Color',
                            multiple: true
                        }
                    }
                }
            }
        };
    };

    Controller.prototype.configAliases = {
        colors: ['groups', 'group', 0, 'color'],
        highContrast: ['groups', 'group', 0, 'highcontrast', 0, 0]
    };

    return Controller;

});
