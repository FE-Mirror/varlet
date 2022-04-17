import{_ as c}from"./elevation.d7d3ee97.js";import{e as n,o as l,c as o,a as s,i as a,j as d,m as t,U as r}from"./vendor.2c1af365.js";const i={components:{}},h={class:"varlet-site-doc"},p=s("h1",null,"Picker",-1),m=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Provides two kinds of function and component call mode support cascading mode at the same time, can handle multilevel linkage.")],-1),j=s("h2",null,"Function Call",-1),u={class:"card"},g=s("h3",null,"Single-column Picker",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Picker } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" columns = ["),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index)]

`),s("span",{class:"hljs-keyword"},"const"),t(" picker = "),s("span",{class:"hljs-keyword"},"async"),t(` () => {
  `),s("span",{class:"hljs-keyword"},"await"),t(` Picker(columns)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"picker"'),t(">")]),t("Single Column Picker"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),k={class:"card"},y=s("h3",null,"Multi-column Picker",-1),x=s("p",null,"A two-dimensional array is passed in, and each entry of the array is the contents of each column. Returns the user triggered status, selected text, and selected index.",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Picker } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` columns = [
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index),
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index),
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index)
]

`),s("span",{class:"hljs-keyword"},"const"),t(" picker = "),s("span",{class:"hljs-keyword"},"async"),t(` () => {
  `),s("span",{class:"hljs-keyword"},"const"),t(" { state, texts, indexes } = "),s("span",{class:"hljs-keyword"},"await"),t(` Picker(columns)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"picker"'),t(">")]),t("Multiple Column Picker"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),f={class:"card"},v=s("h3",null,"Cascade Picker",-1),w=s("p",null,[t("Passing in a "),s("code",null,"cascade"),t(" attribute starts cascading. Built-in component library provides a three-level linkage between provinces and municipalities, import "),s("code",null,"area.json"),t(".")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Picker } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" columns "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" picker = "),s("span",{class:"hljs-keyword"},"async"),t(` () => {
  `),s("span",{class:"hljs-keyword"},"const"),t(" { state, texts, indexes } = "),s("span",{class:"hljs-keyword"},"await"),t(` Picker({
    `),s("span",{class:"hljs-attr"},"cascade"),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
    columns
  })
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"picker"'),t(">")]),t("Cascade Column Picker"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),P=s("h2",null,"Component Call",-1),T={class:"card"},A=s("h3",null,"Single-column Picker",-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" columns = ref(["),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index)])
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-picker"),t(),s("span",{class:"hljs-attr"},":columns"),t("="),s("span",{class:"hljs-string"},'"columns"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),D={class:"card"},N=s("h3",null,"Multi-column Picker",-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` columns = ref([
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index),
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index),
  `),s("span",{class:"hljs-built_in"},"Array"),t(".from({ "),s("span",{class:"hljs-attr"},"length"),t(": "),s("span",{class:"hljs-number"},"20"),t(" }).map("),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"_, index"),t(") =>")]),t(` index)
])
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-picker"),t(),s("span",{class:"hljs-attr"},":columns"),t("="),s("span",{class:"hljs-string"},'"columns"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),I={class:"card"},V=s("h3",null,"Cascade Picker",-1),M=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" area "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` columns = ref(area)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-picker"),t(),s("span",{class:"hljs-attr"},"cascade"),t(),s("span",{class:"hljs-attr"},":columns"),t("="),s("span",{class:"hljs-string"},'"columns"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),O=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>text-key</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>option-height</code></td><td>Option height(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Picker Options</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>columns</code></td><td>Column content</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>title</td><td><em>string</em></td><td><code>Pick it</code></td></tr><tr><td><code>textKey</code></td><td>The attribute key of the text</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>Whether to display the top toolbar</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>Whether to enable cascading mode</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>optionHeight</code></td><td>Option height</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>Number of options visible</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm the button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Popup open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Popup open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Popup close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Close pop-up layer callback when animation ends</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>Pick callbacks when content changes</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>Pick callbacks when confirm</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>Pick callbacks when cancel</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div><div class="card"><h3>Picker NormalColumn</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>texts</code></td><td>Text array</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>Initialize index</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Picker CascadeColumn</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>text</code></td><td>Each line of text</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>children tree</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>Immediately stop scrolling and trigger the <code>confirm</code> event</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Immediately stop scrolling and trigger the <code>cancel</code> event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered when the pick content changes</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr><tr><td><code>cancel</code></td><td>Triggered when you click the cancel button</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr><tr><td><code>confirm</code></td><td>Triggered when you click the confirm button</td><td><code>texts: Texts</code> Text array <br> <code>indexes: number[]</code> picked index array</td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>cancel button content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>title content</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>confirm button content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table></div>',9);function E(W,$,z,U,H,R){const e=n("var-site-code-example");return l(),o("div",h,[p,m,j,s("div",u,[g,a(e,null,{default:d(()=>[b]),_:1})]),s("div",k,[y,x,a(e,null,{default:d(()=>[_]),_:1})]),s("div",f,[v,w,a(e,null,{default:d(()=>[C]),_:1})]),P,s("div",T,[A,a(e,null,{default:d(()=>[S]),_:1})]),s("div",D,[N,a(e,null,{default:d(()=>[B]),_:1})]),s("div",I,[V,a(e,null,{default:d(()=>[M]),_:1})]),O])}var q=c(i,[["render",E]]);export{q as default};
