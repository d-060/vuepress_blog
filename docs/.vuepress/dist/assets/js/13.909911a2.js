(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{249:function(t,a,s){"use strict";s.r(a);var e=s(1),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"マークダウン（markdown）とは"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#マークダウン（markdown）とは"}},[t._v("#")]),t._v(" マークダウン（Markdown）とは")]),t._v(" "),s("p",[s("strong",[t._v("簡易的に文章を記述する")]),t._v("ことが出来る記法の１つです。"),s("br"),t._v("\n開発者として、書けるようになっておいて損はないでしょう。\nマークダウンでメモを取ったり、ブログを書いたり、あらゆることに使用することができます。"),s("br"),t._v("\n私自身、webデザイナーとして活動する中でマークダウンでメモを取れるようになったら便利だと感じました。"),s("br"),t._v("\nというか、書けないと職場でなんか恥ずかしい...(個人的な意見ですw)")]),t._v(" "),s("dl",[s("dt",[t._v("マークダウン記法の特徴として")]),t._v(" "),s("dd",[t._v("・簡易的に記述が出来るので、学習コストがほぼ無い")]),t._v(" "),s("dd",[t._v("・拡張子は「.md」となる")])]),t._v("\nなどが挙げられるでしょう。  \n"),s("p",[t._v("私自身、最近マークダウンを使用し始めたので、"),s("br"),t._v("\n勉強・練習を兼ねてチートシートを作りました。")]),t._v(" "),s("h2",{attrs:{id:"_1-見出し"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-見出し"}},[t._v("#")]),t._v(" 1.見出し")]),t._v(" "),s("p",[t._v("見出しにしたい文の頭に「#」をつけます。"),s("br"),t._v("\n「#」の後に半角スペースを入れましょう。"),s("br"),t._v("\n「#」の数でh1〜h6などの表現が可能です。")]),t._v(" "),s("dl",[s("dt",[t._v("下記の例でいうと、")]),t._v(" "),s("dd",[t._v("見出し1=h1 ")]),t._v(" "),s("dd",[t._v("見出し2=h2 ")]),t._v(" "),s("dd",[t._v("見出し3=h3  ")]),t._v(" "),s("dd",[t._v("見出し4=h4  ")]),t._v(" "),s("dd",[t._v("見出し5=h5 ")]),t._v(" "),s("dd",[t._v("見出し6=h6 ")])]),t._v("\nとなります。\n"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 見出し1\n## 見出し2\n### 見出し3\n#### 見出し4\n##### 見出し5\n######　見出し6\n")])])]),s("h2",{attrs:{id:"_2-改行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-改行"}},[t._v("#")]),t._v(" 2.改行")]),t._v(" "),s("p",[t._v("改行を入れるためにはいくつかのルールがあります。")]),t._v(" "),s("ol",[s("li",[t._v("文末に半角スペースを２つ追加")]),t._v(" "),s("li",[t._v("文の間に1行空白の行を入れる")]),t._v(" "),s("li",[t._v("brタグを使う")])]),t._v(" "),s("p",[t._v("それぞれのサンプル↓")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#半角スペースを２つ追加\nサンプル  \nサンプル  \nサンプル\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#文の間に1行空白の行を入れる\nサンプル\n\nサンプル\n\nサンプル\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#brタグを使う\nサンプル<br>\nサンプル<br>\nサンプル\n")])])]),s("p",[t._v("HTMLをVScodeなどのエディタを使用して書いている人はbrタグが良いかと思ったんですが、"),s("br"),t._v("\nmdファイルで書いているときには"),s("strong",[t._v("emmetが使用できませんでした")]),t._v("。(Markdown専用のエディタなども存在しているようです)"),s("br"),t._v("\nなので、まだ慣れませんが私は毎回文末に半角スペースを２つ追加して改行しています。")]),t._v(" "),s("h2",{attrs:{id:"_3-各種コードの挿入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-各種コードの挿入"}},[t._v("#")]),t._v(" 3.各種コードの挿入")]),t._v(" "),s("p",[t._v("例えば、HTML,CSS,JavaScript,PHPなどのコードをコードとしてメモ又は表示させたい時に使用するのが下記の記法です。"),s("br"),t._v("\n自動で"),s("strong",[t._v("シンタックスハイライト")]),t._v("を適用することができます。")]),t._v(" "),s("p",[t._v("サンプル↓")]),t._v(" "),s("p",[s("strong",[t._v("```")])]),t._v(" "),s("p",[t._v("sample1")]),t._v(" "),s("p",[s("strong",[t._v("```")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nsample1\n\n")])])]),s("p",[t._v("このように、シンタックスハイライトを適用させたい箇所に"),s("br"),t._v(" "),s("strong",[t._v("バッククオート3個ずつ")]),t._v("を上下に配置してあげます。")]),t._v(" "),s("p",[t._v("また、下記のように``又は`で囲ってあげると"),s("br"),t._v(" "),s("strong",[t._v("インラインコードとして")]),t._v("表示することができます。")]),t._v(" "),s("p",[s("strong",[t._v("``")])]),t._v(" "),s("p",[t._v("sample2")]),t._v(" "),s("p",[s("strong",[t._v("``")])]),t._v(" "),s("p",[s("code",[t._v("sample2")])]),t._v(" "),s("p",[s("strong",[t._v("`")])]),t._v(" "),s("p",[t._v("sample3")]),t._v(" "),s("p",[s("strong",[t._v("`")])]),t._v(" "),s("p",[s("code",[t._v("sample3")])]),t._v(" "),s("h2",{attrs:{id:"_4-文字の強調"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-文字の強調"}},[t._v("#")]),t._v(" 4.文字の強調")]),t._v(" "),s("p",[t._v("アンダースコア「_」2個ずつで文頭と文末を囲みます。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("__サンプル__\n")])])]),s("p",[s("strong",[t._v("サンプル")])]),t._v(" "),s("h2",{attrs:{id:"_5-イタリック体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-イタリック体"}},[t._v("#")]),t._v(" 5.イタリック体")]),t._v(" "),s("p",[t._v("アンダースコア「_」1個ずつで文頭と文末を囲みます。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("_サンプル_\n")])])]),s("p",[s("em",[t._v("サンプル")])]),t._v(" "),s("h2",{attrs:{id:"_6-打ち消し線"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-打ち消し線"}},[t._v("#")]),t._v(" 6.打ち消し線")]),t._v(" "),s("p",[t._v("波線「~」2個ずつで文頭と文末を囲みます。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("~~サンプル~~\n")])])]),s("p",[s("s",[t._v("サンプル")])]),t._v(" "),s("h2",{attrs:{id:"_7-折りたたみ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-折りたたみ"}},[t._v("#")]),t._v(" 7.折りたたみ")]),t._v(" "),s("p",[t._v("全体を"),s("code",[t._v("<details>")]),t._v("で囲み、デフォルトで表示させる文言を"),s("code",[t._v("<summary>")]),t._v("で囲みます。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<details><summary>サンプル</summary>サンプルです。</details>\n")])])]),s("details",[s("summary",[t._v("サンプル")]),t._v("サンプルです。")]),t._v(" "),s("h2",{attrs:{id:"_8-リスト"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-リスト"}},[t._v("#")]),t._v(" 8.リスト")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("* サンプル\n+ サンプル\n- サンプル\n")])])]),s("ul",[s("li",[t._v("サンプル")])]),t._v(" "),s("ul",[s("li",[t._v("サンプル")])]),t._v(" "),s("ul",[s("li",[t._v("サンプル")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. サンプル\n2. サンプル\n3. サンプル\n")])])]),s("ol",[s("li",[t._v("サンプル")]),t._v(" "),s("li",[t._v("サンプル")]),t._v(" "),s("li",[t._v("サンプル")])]),t._v(" "),s("h2",{attrs:{id:"_9-引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-引用"}},[t._v("#")]),t._v(" 9.引用")]),t._v(" "),s("p",[t._v("文頭に>を追記します。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(">サンプル\n")])])]),s("blockquote",[s("p",[t._v("サンプル")])]),t._v(" "),s("h2",{attrs:{id:"_10-リンク"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-リンク"}},[t._v("#")]),t._v(" 10.リンク")]),t._v(" "),s("p",[t._v("[]内がリンクテキスト、()内がリンクURLです。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[サンプル](https://www.web-note-web.info/)\n")])])]),s("p",[s("a",{attrs:{href:"https://www.web-note-web.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("サンプル"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_11-テーブル"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-テーブル"}},[t._v("#")]),t._v(" 11.テーブル")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("| 左寄せになります。 | 右寄せになります。 | 中央揃えになります。 |\n|:----------------|----------------:|:----------------:|\n| サンプル         |          サンプル |       サンプル    |\n| サンプル         |          サンプル |       サンプル    |\n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("左寄せになります。")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("右寄せになります。")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("中央揃えになります。")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("サンプル")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("サンプル")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("サンプル")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("サンプル")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("サンプル")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("サンプル")])])])]),t._v(" "),s("h2",{attrs:{id:"_12-水平線"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-水平線"}},[t._v("#")]),t._v(" 12.水平線")]),t._v(" "),s("p",[t._v("「-」、「*」、「_」を3つ以上連続して記述します。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("---\n***\n___\n")])])]),s("hr"),t._v(" "),s("hr"),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_13-画像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-画像"}},[t._v("#")]),t._v(" 13.画像")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('![代替テキスト](画像リンク "altテキスト")\n')])])]),s("p",[t._v("画像はVue Pressのヒーローイメージです。\n"),s("img",{attrs:{src:"https://vuepress.vuejs.org//hero.png",alt:"代替テキスト",title:"altテキスト"}})]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vuepress.vuejs.org/"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);