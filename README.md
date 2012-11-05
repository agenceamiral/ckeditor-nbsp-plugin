CKEditor NBSP Plugin
========

This is a plugin to insert non-breaking spaces (&nbsp;) to content in [CKEdiror](http://ckeditor.com/).

It adds a toolbar button and fix the SHIFT-SPACE keyboard shortcut

Installation
----


### CKEditor 3.x

Add the nbsp folder to the CKEditor plugins directory

In your CKEditor config snippet, add :

    $(this).ckeditor({
      extraPlugins : 'nbsp',
      toolbar: [['Nbsp']],
    });
    
That's it !