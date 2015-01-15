'use strict';

define(['jquery', 'jquery-ui', 'src/header/components/default', 'src/util/versioning', 'src/util/util'], function ($, ui, Default, Versioning, Util) {

    function Element() {
    }

    Util.inherits(Element, Default, {

        _onClick: function () {
            var str = Versioning.getViewJSON('\t');
            var strlen = str.length;
            var txtarea = $('<textarea/>').text(str).css({width: '100%', height: '95%'});

            $('<div />').html(txtarea).dialog({modal: true, width: '80%', height: $(document).height() * 0.7});
            var txtdom = txtarea.get(0);

            txtdom.selectionStart = 0;
            txtdom.selectionEnd = strlen;
            txtdom.focus();
        }

    });

    return Element;

});
