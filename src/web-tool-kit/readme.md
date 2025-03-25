# viewmodel - rendering - UI 와의 관계 고민

button viewmodel
{
uid: xpath
view_type: '',

    id: string,
    name: string,

    renderer: {
    	//renderer
    	visible_state: false //visiblity
    },
    attributes: {
    	//inline-attribute
    }
    styles: {
    	//inline-style
    },
    classNames: {
    	//class
    	button: {
    		type: 'primary',
    	},
    	display_state: false //display
    }

}

button viewmodel_mapper
{
classNames: {
display_state: {
true: '',
false: 'hide'
}
button: {
type: {
primary: 'btn-primary',
warning: 'btn-warning',
info: 'btn-info'
}
}
}
}

layout viewmodel

layout viewmodel_mapper

rendering info
id: xpath,
tag: a
attributes: { attr_id: '', data: '' }[]
classNames: string[]
styles: Record<string, any>
childNodes: []

rendering pipeline

binding info
id: xpath
events:
mousedown
mouseup
click
keypress
keydown
keyup
