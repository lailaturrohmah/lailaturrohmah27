// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Visibility/templates/symbologySettings.html":'\x3cdiv\x3e\r\n       \x3c!-- Visible Section DropDown --\x3e\r\n       \x3cdiv class\x3d"esriCTSettingsRow"\x3e\r\n        \x3cdiv class\x3d"esriCTLabelSettingsRightButton esriCTSettingsButtonIcon esriCTPointer"\r\n          title\x3d"${nls.visibleSectionButtonLabel}" data-dojo-attach-point\x3d"visibleSectionSettingsButton"\r\n          role\x3d"button" aria-label\x3d"${nls.visibleSectionButtonLabel}" tabindex\x3d"0" aria-expanded \x3d"false"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTInputLabelSettings esriCTEllipsis esriCTSubTitle" title\x3d"${nls.visibleSectionLabel}"\x3e\r\n          ${nls.visibleSectionLabel}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- Visible Section Color Pickers --\x3e\r\n      \x3cdiv class\x3d"container esriCTGroupHidden" data-dojo-attach-point\x3d"visibleSectionContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Line" id\x3d"visibleSectionOutlineColor"\r\n          data-dojo-attach-point\x3d"visibleAreaOutlineColorPicker"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Fill" id\x3d"visibleSectionFillColor"\r\n          data-dojo-attach-point\x3d"visibleAreaFillColorPicker"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- Non-visible Section DropDown --\x3e\r\n      \x3cdiv class\x3d"esriCTSettingsRow"\x3e\r\n        \x3cdiv class\x3d"esriCTLabelSettingsRightButton esriCTSettingsButtonIcon esriCTPointer"\r\n        title\x3d"${nls.nonVisibleSectionButtonLabel}" data-dojo-attach-point\x3d"nonVisibleSectionSettingsButton"\r\n        role\x3d"button" aria-label\x3d"${nls.nonVisibleSectionButtonLabel}" tabindex\x3d"0" aria-expanded \x3d"false"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTInputLabelSettings esriCTEllipsis esriCTSubTitle" title\x3d"${nls.nonVisibleSectionLabel}"\x3e${nls.nonVisibleSectionLabel}\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3c!-- Non-visible Section --\x3e\r\n      \x3cdiv class\x3d"container esriCTGroupHidden" data-dojo-attach-point\x3d"nonVisibleSectionContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTEllipsis" title\x3d"${nls.outline}"\x3e${nls.outline}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Line" id\x3d"nonVisibleSectionOutlineColor" data-dojo-attach-point\x3d"nonVisibleAreaOutlineColorPicker"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTEllipsis" title\x3d"${nls.fill}"\x3e${nls.fill}\x3c/div\x3e\r\n        \x3cdiv class\x3d"colorPicker Fill" id\x3d"nonVisibleSectionFillColor" data-dojo-attach-point\x3d"nonVisibleAreaFillColorPicker"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e   \r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/on ./ColorPickerEditor jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!../templates/symbologySettings.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/dom-attr dojo/query dojo/keys dojo/dom dijit/registry jimu/utils dijit/focus jimu/dijit/formSelect jimu/dijit/SymbolChooser".split(" "),function(r,f,g,e,t,u,v,w,b,x,m,n,h,d,y,k,p,q){return r([u,v,x],{baseClass:"jimu-widget-visibility-symbologySettings",templateString:w,selectedSettings:{},
colorPickerNodes:[],constructor:function(a){b.mixin(this,a)},startup:function(){if(!this.config.hasOwnProperty("symbology"))var a={visibleSectionOutlineColor:{color:"#000000",transparency:1,type:"esriSLSSolid"},visibleSectionFillColor:{color:"#00ff00",transparency:.5,type:"esriSFSSolid"},nonVisibleSectionOutlineColor:{color:"#000000",transparency:1,type:"esriSLSSolid"},nonVisibleSectionFillColor:{color:"#ff0000",transparency:.5,type:"esriSFSSolid"}};this.colorPickerNodes=h(".colorPicker",this.domNode);
f.forEach(this.colorPickerNodes,b.hitch(this,function(c){c=new t({nls:this.nls,type:m.contains(c,"Line")?"line":"fill"},c);c.setValues({color:a?a[c.id].color:this.config.symbology[c.id].color,transparency:a?a[c.id].transparency:this.config.symbology[c.id].transparency});c.startup();c.dropdown.set("value",a?a[c.id].type:this.config.symbology[c.id].type)}));var l=h(".jimu-color-pickerPopup",this.domNode);f.forEach(l,b.hitch(this,function(a){this.own(e(a,"keydown",b.hitch(this,function(a){a.keyCode!==
d.ENTER&&a.keyCode!==d.SPACE||a.currentTarget.click()})))}));this.onSettingsChanged()},postCreate:function(){this.inherited(arguments);this._handleClickEvents();this.visibleSectionSettingsButton.click()},_handleClickEvents:function(){this.own(e(this.visibleSectionSettingsButton,"click",b.hitch(this,function(){this._openCloseNodes(this.visibleSectionSettingsButton,this.visibleSectionContainer)})));this.own(e(this.nonVisibleSectionSettingsButton,"click",b.hitch(this,function(){this._openCloseNodes(this.nonVisibleSectionSettingsButton,
this.nonVisibleSectionContainer)})));this.own(e(this.visibleSectionSettingsButton,"keydown",b.hitch(this,function(a){a.keyCode!==d.ENTER&&a.keyCode!==d.SPACE||this._openCloseNodes(this.visibleSectionSettingsButton,this.visibleSectionContainer)})));this.own(e(this.nonVisibleSectionSettingsButton,"keydown",b.hitch(this,function(a){a.keyCode!==d.ENTER&&a.keyCode!==d.SPACE||this._openCloseNodes(this.nonVisibleSectionSettingsButton,this.nonVisibleSectionContainer)})))},_openCloseNodes:function(a,l){var c=
h(".container",this.domNode),d=h(".esriCTSettingsButtonIcon",this.domNode),e=!1;this.validInputs()&&(a&&m.contains(a,"esriCTLabelSettingsRightButton")&&(e=!0),f.forEach(c,b.hitch(this,function(a){g.addClass(a,"esriCTGroupHidden")})),f.forEach(d,b.hitch(this,function(a,c){g.removeClass(a,"esriCTLabelSettingsDownButton");g.addClass(a,"esriCTLabelSettingsRightButton");n.set(a,"aria-expanded","false");c===d.length-1&&setTimeout(b.hitch(this,function(){this._setLastFocusNode()}),100)})),e?(g.removeClass(l,
"esriCTGroupHidden"),g.removeClass(a,"esriCTLabelSettingsRightButton"),g.addClass(a,"esriCTLabelSettingsDownButton"),n.set(a,"aria-expanded","true"),a=h(".jimu-color-picker",l),a.length&&q.focus(a[0])):q.focus(a))},onClose:function(){if(!this.validInputs())return!1;this.onSettingsChanged();this._openCloseNodes()},onSettingsChanged:function(){f.forEach(this.colorPickerNodes,b.hitch(this,function(a){var b={color:k.byId(a.id).getValues().color,transparency:k.byId(a.id).getValues().transparency,type:k.byId(a.id).dropdown.getValue()};
this.selectedSettings[a.id]=b}));this.emit("settingsChanged",this.selectedSettings)},validInputs:function(){var a=!0;f.some(this.colorPickerNodes,function(b){if(!k.byId(b.id).validateSpinner())return a=!1,!0},this);return a},_setLastFocusNode:function(){if(m.contains(this.nonVisibleSectionSettingsButton,"esriCTLabelSettingsDownButton")){var a=h(".dijit",y.byId("nonVisibleSectionFillColor").lastElementChild)[0];p.initLastFocusNode(this.refDomNode,a)}else p.initLastFocusNode(this.refDomNode,this.nonVisibleSectionSettingsButton)}})});