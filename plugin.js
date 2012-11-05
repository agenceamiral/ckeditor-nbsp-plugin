CKEDITOR.plugins.add('nbsp',
{
	init: function(editor) {
		editor.addCommand('insertNbsp', {
			exec : function(editor) {
				editor.insertHtml('&nbsp;');
			}
		});

		editor.ui.addButton('Nbsp', {
			label: 'Insert a non-breaking space',
			command: 'insertNbsp',
			icon: this.path + 'images/nbsp.png'
		});

		editor.keystrokeHandler.keystrokes[CKEDITOR.SHIFT + 32 /* SPACE */] = 'insertNbsp';
	}
});