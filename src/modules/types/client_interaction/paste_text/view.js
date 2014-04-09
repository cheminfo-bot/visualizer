define(['modules/default/defaultview','src/util/api'], function(Default, API) {
	
	function view() {};
	view.prototype = $.extend(true, {}, Default, {
		currentValue: "",
		init: function() {	
			var html = "";
			html += '<div></div>';
			
			this.dom = $( html ).css( { 
				height: '100%',
				width: '100%'
			} );

			this.module.getDomContent( ).html( this.dom );
		},
        inDom: function() {
            var that = this;
            var textarea = $("<textarea>").css({
                "box-sizing":"border-box",
                "width":"99%",
                "height":"99%"
            }).on("keyup", function() {
            	if (that.value!=textarea.val()) {
            		that.module.controller.valueChanged(textarea.val());
            		that.value=textarea.val();
            	}
            }).val(this.module.getConfiguration("thevalue"));
            this.dom.append(textarea);
            that.value=textarea.val();
            this.module.controller.valueChanged(textarea.val());
        }
	});

	return view;
});