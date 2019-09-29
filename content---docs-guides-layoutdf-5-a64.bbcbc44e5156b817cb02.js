(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return u}));n(0);var a=n(161);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l={sidebar_label:"Layout",title:"Layout"},r=[{value:"Fixed Dimensions",id:"fixed-dimensions",children:[]},{value:"Dynamic Layouts",id:"dynamic-layouts",children:[]},{value:"FlexLayout",id:"flexlayout",children:[{value:"Example:",id:"example",children:[]},{value:"TLDR",id:"tldr",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],s={rightToc:r},c="wrapper";function u(e){var t=e.components,n=i(e,["components"]);return Object(a.b)(c,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"NodeGui uses a layout system to automatically arranging child widgets within a widget to ensure that they make good use of the available space."),Object(a.b)("h2",{id:"fixed-dimensions"},"Fixed Dimensions"),Object(a.b)("p",null,"A widget's height and width determine its size on the screen. The simplest way to set the dimensions of a widget is by adding a fixed width and height to style. Setting dimensions this way is common for widgets that should always render at exactly the same size, regardless of screen dimensions."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'\nconst { QMainWindow, QWidget } = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\nconst view = new QWidget(win);\n\nview.setInlineStyle("width:50px; height:30px; background-color: yellow;");\n\nwin.show();\n(global as any).win = win;\n\n')),Object(a.b)("h2",{id:"dynamic-layouts"},"Dynamic Layouts"),Object(a.b)("p",null,"Dynamic layouts automatically position and resize widgets when the amount of space available for them changes, ensuring that they are consistently arranged and that the user interface as a whole remains usable."),Object(a.b)("p",null,"NodeGui currently supports the following layouts at the moment:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"FlexLayout"),Object(a.b)("li",{parentName:"ul"},"QGridLayout")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"More layouts will be added as time goes on. You can also add layouts yourself by creating custom native plugins for NodeGui usng the ",Object(a.b)("a",o({parentName:"em"},{href:"/docs/guides/custom-nodegui-native-plugin"}),"Custom Native Plugin API."))),Object(a.b)("h2",{id:"flexlayout"},"FlexLayout"),Object(a.b)("p",null,"Use FlexLayout to have the children expand and shrink dynamically based on available space. Normally you will use ",Object(a.b)("inlineCode",{parentName:"p"},"flex: 1"),", which tells a widget to fill all available space, shared evenly amongst other widgets with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A widget can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children will not be visible.")),Object(a.b)("p",null,"Flexbox is designed to provide a consistent layout on different screen sizes. You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout."),Object(a.b)("h3",{id:"example"},"Example:"),Object(a.b)("p",null,"Lets say you want to build a UI that has a parent view which has two child widgets. One a label with text Hello and another a view with background color white. Now you want the label to occupy 1/3 of the available space while the white colored child view to occupy the remaining 2/3 space."),Object(a.b)("img",{src:"/img/docs/flex-layout-1.png",alt:"flex layout example 1",style:{maxWidth:700,width:"100%"}}),Object(a.b)("p",null,"The code for that would look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'let { QLabel, FlexLayout, QWidget, QMainWindow } = require("@nodegui/nodegui");\n\n// Create a root view and assign a flex layout to it.\nconst rootView = new QWidget();\nrootView.setLayout(new FlexLayout());\nrootView.setObjectName("rootView");\n\n// Create two widgets - one label and one view\nconst label = new QLabel();\nlabel.setText("Hello");\nlabel.setObjectName("label");\n\nconst view = new QWidget();\nview.setObjectName("view");\n\n// Now tell rootView layout that the label and the other view are its children\nrootView.layout.addWidget(label);\nrootView.layout.addWidget(view);\n\n// Tell FlexLayout how you want children of rootView to be poisitioned\nrootView.setStyleSheet(`\n  #rootView{\n    flex: 1;\n    background-color: blue;\n  }\n  #label {\n   flex: 1;\n   color: white;\n   background-color: green;\n  }\n  #view {\n    flex: 3;\n    background-color: white;\n  }\n`);\n\nconst win = new QMainWindow();\nwin.setCentralWidget(rootView);\nwin.show();\nglobal.win = win;\n')),Object(a.b)("h3",{id:"tldr"},"TLDR"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"First step is to set a layout on the parent widget. You can do this using the widget's ",Object(a.b)("inlineCode",{parentName:"p"},"setLayout")," method. Here we are using FlexLayout.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"For a layout to work you must let the layout know which widgets are the children and how to lay them on the available screen space within the parent widget. You do this using a layout's ",Object(a.b)("inlineCode",{parentName:"p"},"addWidget")," method. In the case of FlexLayout you will specify properties by setting flex properties on the parent and child widgets."))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"To know more on how FlexBox layout works in depth you can visit: ",Object(a.b)("a",o({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/0.60/flexbox"}),"https://facebook.github.io/react-native/docs/0.60/flexbox"),"."),Object(a.b)("p",{parentName:"blockquote"},"NodeGui uses the same library that React Native uses underneath for FlexBox (",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/yoga"}),"Yoga"),").")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can specify layout properties via inline styles also.")),Object(a.b)("h2",{id:"conclusion"},"Conclusion"),Object(a.b)("p",null,"The primary layout in NodeGui is the Flexbox layout. Flexbox layout can be controlled via stylesheet just as in web. So both paint and layout properties are available at the same place."),Object(a.b)("p",null,"NodeGui will also try to support other available layouts in Qt. But, If you need a special layout that Qt/NodeGui doesnt yet support you can always create a ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/guides/custom-nodegui-native-plugin"}),"native plugin for NodeGui")," and use Qt's APIs to create one. In fact, Qt doesnt have a FlexLayout built in, FlexLayout is actually a custom Qt layout written with the help of Yoga library."))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a),i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,b=u[r+"."+d]||u[d]||c[d]||i;return n?o.a.createElement(b,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(b,Object.assign({},{ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);