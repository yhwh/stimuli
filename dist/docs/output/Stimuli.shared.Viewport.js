Ext.data.JsonP.Stimuli_shared_Viewport({"tagname":"class","name":"Stimuli.shared.Viewport","autodetected":{},"files":[{"filename":"viewport.js","href":"viewport.html#Stimuli-shared-Viewport"}],"members":[{"name":"view","tagname":"cfg","owner":"Stimuli.shared.Viewport","id":"cfg-view","meta":{}},{"name":"constructor","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-constructor","meta":{}},{"name":"$","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-S-","meta":{}},{"name":"getDocument","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-getDocument","meta":{}},{"name":"getModifierState","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-getModifierState","meta":{}},{"name":"getModifiers","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-getModifiers","meta":{}},{"name":"getScreenX","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-getScreenX","meta":{}},{"name":"getScreenY","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-getScreenY","meta":{}},{"name":"getVisibleElementAt","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-getVisibleElementAt","meta":{}},{"name":"getWindow","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-getWindow","meta":{}},{"name":"setModifier","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-setModifier","meta":{}},{"name":"unsetModifier","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-unsetModifier","meta":{}},{"name":"updateHash","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-updateHash","meta":{}},{"name":"updateUrl","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-updateUrl","meta":{}},{"name":"waitForReady","tagname":"method","owner":"Stimuli.shared.Viewport","id":"method-waitForReady","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Stimuli.shared.Viewport","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/viewport.html#Stimuli-shared-Viewport' target='_blank'>viewport.js</a></div></pre><div class='doc-contents'><p>A viewport abstraction layer to be used by virtual devices.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-view' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-cfg-view' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-cfg-view' class='name expandable'>view</a> : Window<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A window object</p>\n</div><div class='long'><p>A window object</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Stimuli.shared.Viewport-method-constructor' class='name expandable'>Stimuli.shared.Viewport</a>( <span class='pre'>context</span> ) : <a href=\"#!/api/Stimuli.shared.Viewport\" rel=\"Stimuli.shared.Viewport\" class=\"docClass\">Stimuli.shared.Viewport</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : <a href=\"#!/api/Stimuli.shared.Context\" rel=\"Stimuli.shared.Context\" class=\"docClass\">Stimuli.shared.Context</a><div class='sub-desc'><p>The current browser context this viewport depends on.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Stimuli.shared.Viewport\" rel=\"Stimuli.shared.Viewport\" class=\"docClass\">Stimuli.shared.Viewport</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-S-' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-S-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-S-' class='name expandable'>$</a>( <span class='pre'>selector, [all]</span> ) : Mixed<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the first {HTMLElement} matching the css selector. ...</div><div class='long'><p>Returns the first {HTMLElement} matching the css selector.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : string<div class='sub-desc'><p>The css selector (see http://sizzlejs.com/)</p>\n</div></li><li><span class='pre'>all</span> : Boolean (optional)<div class='sub-desc'><p>If set to True all elements matching the css selector will be returned in an {Array}.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDocument' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-getDocument' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-getDocument' class='name expandable'>getDocument</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the current document. ...</div><div class='long'><p>Returns the current document.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModifierState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-getModifierState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-getModifierState' class='name expandable'>getModifierState</a>( <span class='pre'>modifierName</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the state of a keyboard modifier ...</div><div class='long'><p>Returns the state of a keyboard modifier</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modifierName</span> : String<div class='sub-desc'><p>The modifier name (Shift, Control, Alt or Meta)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True is the modifier is active</p>\n</div></li></ul></div></div></div><div id='method-getModifiers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-getModifiers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-getModifiers' class='name expandable'>getModifiers</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the currently active keyboard modifiers ...</div><div class='long'><p>Returns the currently active keyboard modifiers</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The modifiers list separated by a whitespace</p>\n</div></li></ul></div></div></div><div id='method-getScreenX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-getScreenX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-getScreenX' class='name expandable'>getScreenX</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the x coordinate of the window relative to the screen. ...</div><div class='long'><p>Returns the x coordinate of the window relative to the screen.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScreenY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-getScreenY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-getScreenY' class='name expandable'>getScreenY</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the y coordinate of window relative to the screen. ...</div><div class='long'><p>Returns the y coordinate of window relative to the screen.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getVisibleElementAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-getVisibleElementAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-getVisibleElementAt' class='name expandable'>getVisibleElementAt</a>( <span class='pre'>x, y</span> ) : HTMLElement<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a visible element at the specified coordinates. ...</div><div class='long'><p>Returns a visible element at the specified coordinates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>The x coordinate</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>The y coordinate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-getWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-getWindow' class='name expandable'>getWindow</a>( <span class='pre'></span> ) : Window<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the current window. ...</div><div class='long'><p>Returns the current window.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Window</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setModifier' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-setModifier' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-setModifier' class='name expandable'>setModifier</a>( <span class='pre'>modifierName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets a keyboard modifier active. ...</div><div class='long'><p>Sets a keyboard modifier active.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modifierName</span> : String<div class='sub-desc'><p>The modifier name (Shift, Control, Alt or Meta)</p>\n</div></li></ul></div></div></div><div id='method-unsetModifier' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-unsetModifier' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-unsetModifier' class='name expandable'>unsetModifier</a>( <span class='pre'>modifierName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets a keyboard modifier inactive ...</div><div class='long'><p>Sets a keyboard modifier inactive</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>modifierName</span> : String<div class='sub-desc'><p>The modifier name (Shift, Control, Alt or Meta)</p>\n</div></li></ul></div></div></div><div id='method-updateHash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-updateHash' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-updateHash' class='name expandable'>updateHash</a>( <span class='pre'>hash</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Updates window hash. ...</div><div class='long'><p>Updates window hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hash</span> : String<div class='sub-desc'><p>The new hash.</p>\n</div></li></ul></div></div></div><div id='method-updateUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-updateUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-updateUrl' class='name expandable'>updateUrl</a>( <span class='pre'>url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Updates the current window url. ...</div><div class='long'><p>Updates the current window url.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The new url.</p>\n</div></li></ul></div></div></div><div id='method-waitForReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Viewport'>Stimuli.shared.Viewport</span><br/><a href='source/viewport.html#Stimuli-shared-Viewport-method-waitForReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Viewport-method-waitForReady' class='name expandable'>waitForReady</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits for the viewport to be ready, it allows to block while a stimulus caused\na navigation to another page. ...</div><div class='long'><p>Waits for the viewport to be ready, it allows to block while a stimulus caused\na navigation to another page.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The function to call when the viewport is ready.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});