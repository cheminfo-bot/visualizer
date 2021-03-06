'use strict';

define(['modules/default/defaultview', 'src/util/util', 'ace/ace', 'src/util/context', 'jquery', 'lodash', 'src/util/aceHelper'], function (Default, Util, ace, Context, $, _, aceHelper) {

    function View() {
        this._id = Util.getNextUniqueId();
        this._code = null;
        this._data = null;
    }

    $.extend(true, View.prototype, Default, {
        init() {

            var table = this.table = $('<table>').css({
                height: '100%',
                width: '100%'
            });
            var editorRow = $('<tr>').appendTo(table).css('height', 'auto');
            this.buttonRow = $('<tr>').appendTo(table).css('height', '30px');
            this.editorCell = $('<td>').css('height', '100%').appendTo(editorRow);
            this.buttonCell = $('<td>').appendTo(this.buttonRow).css('text-align', 'center');

            var debouncing = this.module.getConfiguration('debouncing');
            if (debouncing > 0) {
                this.editorChangedDebounced = _.debounce(this.editorChanged, debouncing);
            } else {
                this.editorChangedDebounced = this.editorChanged;
            }

            this.module.getDomContent().html(table);

        },
        inDom() {
            var initVal = String(this.module.getConfiguration('script') || '');
            this.setCode(initVal);

            if (this.module.getConfigurationCheckbox('iseditable', 'editable')) {
                this.editable = true;
                $('<div id="' + this._id + '"></div>').css('height', '100%').css('width', '100%').appendTo(this.editorCell);
                this.editor = ace.edit(this._id);
                var mode = './mode/' + this.module.getConfiguration('mode');

                aceHelper.applyConfig(this.module, this.editor);
                this.editor.$blockScrolling = Infinity;
                this.editor.getSession().setMode(mode);
                this.editor.setValue(initVal, -1);
                this.editor.getSession().on('change', () => this.editorChangedDebounced());
            }

            if (this.module.getConfigurationCheckbox('hasButton', 'button')) {
                this.buttonCell.append(
                    $('<span>' + this.module.getConfiguration('btnvalue') + '</span>')
                        .addClass('form-button')
                        .on('click', () => this.module.controller.onButtonClick(this.getCode()))
                );
            } else {
                this.buttonRow.remove();
            }
            this.resolveReady();
        },
        blank: {
            data() {
                this._data = null;
                this.setCode('');
                if (this.editable) {
                    this.editor.setValue('');
                }
            }
        },
        update: {
            data(value) {
                this._data = value;
                var val = String(value.get());
                this.setCode(val);
                if (this.editable) {
                    var currentVal = this.editor.getValue();
                    if (val === currentVal) {
                        return;
                    }
                    this.editor.setValue(val);
                    this.editor.scrollToLine(0);
                    this.editor.clearSelection();
                }
            }
        },
        editorChanged() {
            this.setCode(this.editor.getValue());
        },
        onResize() {
            if (this.editor) {
                this.editor.resize();
            }
        },
        setCode(value) {
            var currentValue = this._code;
            if (currentValue === value) {
                return;
            }
            this._code = value;
            if (this.module.getConfigurationCheckbox('storeOnChange', 'store') && this.module.definition.configuration.groups) {
                this.module.definition.configuration.groups.group[0].script[0] = value;
            }
            this.module.controller.onEditorChanged(value);
        },
        getCode() {
            return this._code;
        }
    });

    return View;

});
