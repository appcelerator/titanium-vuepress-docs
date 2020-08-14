(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{1867:function(t,e,s){"use strict";s.r(e);var a=s(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"titanium-filesystem-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#titanium-filesystem-file"}},[t._v("#")]),t._v(" Titanium.Filesystem.File")]),t._v(" "),s("TypeHeader"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("Use the "),s("type-link",{attrs:{type:"Titanium.Filesystem.getFile"}},[t._v("Titanium.Filesystem.getFile")]),t._v(" method to get a handle to a "),s("code",[t._v("File")]),t._v(" object,\nwhich represents a given path.  There does not need to be an existing file or directory\ndoes not need to exist before "),s("code",[t._v("getFile")]),t._v(" is called. If the file doesn't exist, and\nthe file path identifies a file in a writable directory, writing to the file\ncreates the file implicitly.")],1),t._v(" "),s("p",[t._v("See "),s("type-link",{attrs:{type:"Titanium.Filesystem"}},[t._v("Titanium.Filesystem")]),t._v(" for constants identifying commonly-used device directories.")],1),t._v(" "),s("p",[t._v("Use the "),s("type-link",{attrs:{type:"Titanium.Filesystem.File.exists"}},[t._v("exists")]),t._v(" method to test whether the file exists.")],1),t._v(" "),s("p",[t._v("A file object can point to an ordinary file, a directory or a symbolic link.\nUse "),s("type-link",{attrs:{type:"Titanium.Filesystem.File.createDirectory"}},[t._v("createDirectory")]),t._v(" to create a directory.\nUse the "),s("type-link",{attrs:{type:"Titanium.Filesystem.File.getDirectoryListing"}},[t._v("getDirectoryListing")]),t._v(" method to\nretrieve a list of the directory's contents.")],1),t._v(" "),s("p",[t._v("The "),s("code",[t._v("File")]),t._v(" object doesn't provide methods for random access into the file.\nThe "),s("code",[t._v("read")]),t._v(" method reads the file's entire contents into a "),s("code",[t._v("Blob")]),t._v(" object.\nThe "),s("code",[t._v("write")]),t._v(" method can either overwrite the entire file or append to an\nexisting file.")]),t._v(" "),s("p",[t._v("For random access to a file, such as accessing a small portion of a larger file,\nyou can open a file as a "),s("type-link",{attrs:{type:"Titanium.Filesystem.FileStream"}},[t._v("FileStream")]),t._v(" object. Use the\n"),s("type-link",{attrs:{type:"Titanium.Filesystem.File.open"}},[t._v("open")]),t._v(" method to get a "),s("code",[t._v("FileStream")]),t._v(" for an\nexisting "),s("code",[t._v("File")]),t._v(" object, or use the "),s("type-link",{attrs:{type:"Titanium.Filesystem.openStream"}},[t._v("Titanium.Filesystem.openStream")]),t._v(" method\nto get a "),s("code",[t._v("FileStream")]),t._v(" directly without calling "),s("code",[t._v("getFile")]),t._v(" first.")],1),t._v(" "),s("p",[t._v("The "),s("type-link",{attrs:{type:"Titanium.Filesystem"}},[t._v("Titanium.Filesystem")]),t._v(" module defines a number of properties and methods related to\nfilesystem access, including properties that specify paths for application-specific\ndirectories, and methods for creating temporary files and directories.")],1),t._v(" "),s("p",[t._v("On Android, files may be stored on external storage (that is, removable media such as\nSD Cards).")]),t._v(" "),s("p",[t._v("Note that once created with "),s("code",[t._v("getFile")]),t._v(", the path associated with a file object is\nimmutable. If you move the underlying file using "),s("type-link",{attrs:{type:"Titanium.Filesystem.File.move"}},[t._v("move")]),t._v("\nor "),s("type-link",{attrs:{type:"Titanium.Filesystem.File.rename"}},[t._v("rename")]),t._v(", you can no longer access it with the\noriginal "),s("code",[t._v("File")]),t._v(" object. You must use "),s("code",[t._v("getFile")]),t._v(" to get a handle to the new path.")],1),t._v(" "),s("h3",{attrs:{id:"resource-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-files"}},[t._v("#")]),t._v(" Resource Files")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("Resources")]),t._v(" directory and all the files in it are read-only. On Android, resource\nfiles are stored in the resource bundle and do not have all of the properties of\nnormal files. In particular, they do not have creation or modification timestamps.")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h3",{attrs:{id:"reading-a-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-a-file"}},[t._v("#")]),t._v(" Reading a File")]),t._v(" "),s("p",[t._v("Data files shipped with the application are stored in the resources directory.")]),t._v(" "),s("p",[t._v("This example reads string data from a text file.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resourcesDirectory is actually the default location, so the first")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// argument could be omitted here.")]),t._v("\nfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourcesDirectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"textfile.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" readText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dispose of file handle & blob.")]),t._v("\nfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nblob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"creating-a-subdirectory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-subdirectory"}},[t._v("#")]),t._v(" Creating a Subdirectory")]),t._v(" "),s("p",[t._v("Files that the application writes to need to be stored outside of the\nresources directory, since that directory is read-only.")]),t._v(" "),s("p",[t._v("This example creates a subdirectory to store downloaded images.\nThe example assumes that two variables are defined elsewhere in the code:\nmyImageID, a string containing some kind of ID for the downloaded image,\nand myImageData, a "),s("code",[t._v("Blob")]),t._v(" containing JPEG image data.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imageDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applicationDataDirectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'downloaded_images'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" imageDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    imageDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .resolve() provides the resolved native path for the directory.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imageFile  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myImageID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nTi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ImageFile path is: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" imageFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myImageData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle write error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dispose of file handles")]),t._v("\nimageFile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimageDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);e.default=n.exports}}]);