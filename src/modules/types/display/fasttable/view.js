define(['require', 'modules/default/defaultview', 'src/util/util', 'src/util/api', 'src/util/domdeferred', 'src/util/datatraversing', 'src/util/typerenderer', 'src/util/context'], function(require, Default, Util, API, DomDeferred, Traversing, Renderer, Context) {
	
	function view() {};
	view.prototype = $.extend(true, {}, Default, {

	 	init: function() {	

	 		var self = this,
	 			lastTr,
	 			currentColSort;

	 		this.domTable = $( "<table />" , { cellpadding: 0, cellspacing: 0 } ).css( { width: '100%' } );
	 		this.domHead = $( "<thead />" ).appendTo( this.domTable );
	 		this.domBody = $( "<tbody />" ).appendTo( this.domTable );


	 		this.domTable.on('mouseover', 'tr', function() {

	 			if(this !== lastTr) {

	 				var dataRowId = parseInt( $(this).attr('data-row-id') );
	 					
	 				if( ! isNaN ( dataRowId ) ) {
		 				self.module.controller.lineHover( self.module.data, dataRowId );
		 			}
                                        
	 			}
				lastTr = this;

	 		}).on('mouseout', 'tr', function() {

	 			if(this === lastTr) {

	 				var dataRowId = parseInt( $(this).attr('data-row-id') );

	 				if( ! isNaN ( dataRowId ) ) {
						self.module.controller.lineOut( self.module.data, dataRowId );
					}
                                        
	 			}

	 		}).on('click', 'tr', function() {

 				self.module.controller.lineClick( self.module.data, parseInt( $(this).attr('data-row-id') ) );

	 		}).on('click', 'th', function() { // Sorting

	 			var jpathId = $(this).attr('data-jpath-number'),
	 				data = self.module.getDataFromRel('list');

	 			if( ! currentColSort || currentColSort.col !== jpathId ) {

	 				if( currentColSort ) {
	 					self.domTable.find('th[data-jpath-number="' + currentColSort.col + '"] .sort').remove();
	 				}

	 				currentColSort = { asc: true, col: jpathId, span: $('<div class="sort up"></div>') };

					self.domTable.find('th[data-jpath-number="' + currentColSort.col + '"]').append( currentColSort.span );

	 			} else if( currentColSort.col === jpathId ) {
	 				currentColSort.asc = ! currentColSort.asc;
	 				currentColSort.span.toggleClass('up');
	 			}


	 			data.sort( function( a, b ) {
	 				
	 				return (currentColSort.asc ? 1 : -1) * ( self.jpaths[ jpaths[ jpathId ].jpath ]( a ) > self.jpaths[ jpaths[ jpathId ].jpath ]( b ) ? 1 : -1 );
	 			} );

	 			self.blank.list.call( self );
	 			self.update.list.call( self, data );
	 		});

	 		this.dom = this.domTable;

	 		this.module.getDomContent( ).html( this.dom );

	 		this.onReady = $.Deferred();
	 		this.onResize( );

	 		var jpaths = this.module.getConfiguration( 'colsjPaths' ),
				l = jpaths.length,
				j = 0;

			this.jpaths = {};

			thead = '<tr>';
			for( ; j < l ; j ++ ) {

				if( ! jpaths[ j ].jpath ) {
					continue;
				}

				Util.addjPathFunction( this.jpaths, jpaths[ j ].jpath );
				thead += '<th data-jpath-number="' + j + '">' + jpaths[ j ].name + '</th>';
			}
			thead += '</tr>';

			var colorjpath = this.module.getConfiguration( 'colorjPath' );

			if( colorjpath ) {
				
				this.colorjpath = Util.makejPathFunction( colorjpath );
			}
		
			this.domHead.html( thead );
	 	},

	 	unload: function() {

	 		this.module.getDomContent( ).empty( );
	 	},

	 	inDom: function() {

			this.onReady.resolve( );
	 	},


	 	applyFilterToRow: function(elId, rowId) {

			if( this.filter ) {
			   	this.filter( this.jqGrid, this.elements[ elId ], rowId );
			}
	 	},

	 	onResize: function( ) {
	 		
	 		if( ! this.jqGrid ) {
	 			return;
	 		}

	 		
	 	},

	 	blank: {

	 		list: function() {
				
				if( ! this.module.data ) {
	 				return;
	 			}

	 			var i,
	 				l = this.module.data.length;
	 			
				for( i = 0; i < l ; i++ ) {
					this.module.data[ i ].unbindChange( this.module.getId() );
				}
			}
	 	},

	 	update: {

	 		list: function( moduleValue ) {

				if( moduleValue.type === "string") {
					return;
				}

	 			if( ! moduleValue ) {
	 				return;
	 			}
                                
	 			moduleValue = moduleValue.get();
                
				var self = this, 
					jpaths = this.module.getConfiguration( 'colsjPaths' ),
					nbLines = this.module.getConfiguration( 'nbLines' ) || 20,
					html = '',
					i = 0,
					l = moduleValue.length,
					j,
					k = jpaths.length;

				this.module.data = moduleValue;

				for( ; i < l ; i ++ ) {

					html += this.buildElement( moduleValue[ i ], i );
				}

				this.domBody.html( html );

				// Debouncing the highlighting

				if( this.timeout ) {
					window.clearTimeout( this.timeout );
				}

				// Wait before setting the highlights
				this.timeout = window.setTimeout( function( ) {
					
					API.killHighlight( self.module.getId( ) );

					for( i = 0; i < l ; i++ ) {
							

						( function( j ) {

							API.listenHighlight( self.module.data[ j ], function( val ) {
								self.doHighlight( j, val );
							}, false, self.module.getId( ) );


							var dom = self.domBody.find('#' + self.module.getId() + '_' + j);
							self.module.data[ j ].onChange( function( el ) {
								dom.replaceWith( self.buildElement( el, i, true ) );
							}, self.module.getId() );

							if( self.module.data[ j ].removable ) {
								Context.listen( dom.get( 0 ), [
									['<li><a><span class="ui-icon ui-icon-close"></span> Remove</a></li>', 
									function() {
										self.onActionReceive.removeRowById.call( self, j );
									}]
								]);
							}
							
						}) ( i );
						
					}

				}, 1000); // 1 sec timeout
			}
		},

		buildElement: function( source, i ) {
			
			if( ! source.get ) {
				return;
			}

			var 
				jpaths = this.module.getConfiguration( 'colsjPaths' ),
				html = '',
				j,
				k = jpaths.length;

			html += '<tr';
			
			if( this.colorjpath ) {
				html += ' style="background-color: ' + this.colorjpath( source ) + ';"';
			}

			html += ' id="' + this.module.getId() + '_' + i + '" data-row-id="' + i + '"';
			html += '>';

			j = 0;
			for( ; j < k ; j ++ ) {

				if( ! jpaths[ j ].jpath ) {
					continue;
				}
				
				html += '<td>';	
				html += Traversing.get( this.getValue( source.get(), jpaths[ j ].jpath ) ) || "";
				html += '</td>';
			}
			html += '</tr>';

			return html;
		},

		doHighlight: function( i, val ) {
			this.domBody.find('tr[data-row-id=' + i + ']')[ val ? 'addClass' : 'removeClass']( 'ci-highlight' );
		},

		getValue: function( trVal, jpath ) {

			if( ! this.jpaths[ jpath ]) {
				return "";
			}

			return this.jpaths[ jpath ]( trVal );
		},

		getDom: function() {
			return this.dom;
		},

		onActionReceive:  {

			addRow: function(source) {
			
				this.elements = this.elements || [];
				this.elements.push(source);

				var jpaths = this.module.getConfiguration( 'colsjPaths' );
				var l = this.elements.length - 1;

				//this.module.data = this.module.data || new DataArray();
				//console.log(this.module, this.module.);// this.module.model.getDataFromRel('list') );
				this.module.getDataFromRel('list').push( source );

				var el = this.buildElement(source, l);
				this.domBody.after( el );
			},

			removeRowById: function( rowId ) {

				var el = this.module.getDataFromRel('list').splice( rowId, 1 );
				el[ 0 ].unbindChange( this.module.getId( ) );
				this.domBody.find("[data-row-id=" + rowId + "]").remove();
			}

		},

		typeToScreen: {

		}
	});

	return view;
});