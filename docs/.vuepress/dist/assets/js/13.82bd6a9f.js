(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{248:function(a,_,t){"use strict";t.r(_);var s=t(0),v=Object(s.a)({},(function(){var a=this,_=a.$createElement,t=a._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"マークダウン（markdown）とは"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#マークダウン（markdown）とは"}},[a._v("#")]),a._v(" マークダウン（Markdown）とは")]),a._v(" "),t("p",[t("strong",[a._v("簡易的に文章を記述する")]),a._v("ことが出来る記法の１つです。"),t("br"),a._v("\n開発者として、書けるようになっておいて損はないでしょう。\nマークダウンでメモを取ったり、ブログを書いたり、あらゆることに使用することができます。"),t("br"),a._v("\n私自身、webデザイナーとして活動する中でマークダウンでメモを取れるようになったら便利だと感じました。"),t("br"),a._v("\nというか、書けないと職場でなんか恥ずかしい...(個人的な意見ですw)")]),a._v(" "),t("dl",[t("dt",[a._v("マークダウン記法の特徴として")]),a._v(" "),t("dd",[a._v("・簡易的に記述が出来るので、学習コストがほぼ無い")]),a._v(" "),t("dd",[a._v("・拡張子は「.md」となる")])]),a._v("\nなどが挙げられるでしょう。  \n"),t("p",[a._v("私自身、最近マークダウンを使用し始めたので、"),t("br"),a._v("\n勉強・練習を兼ねてチートシートを作りました。")]),a._v(" "),t("h2",{attrs:{id:"_1-見出し"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-見出し"}},[a._v("#")]),a._v(" 1.見出し")]),a._v(" "),t("p",[a._v("見出しにしたい文の頭に「#」をつけます。"),t("br"),a._v("\n「#」の後に半角スペースを入れましょう。"),t("br"),a._v("\n「#」の数でh1〜h6などの表現が可能です。")]),a._v(" "),t("dl",[t("dt",[a._v("下記の例でいうと、")]),a._v(" "),t("dd",[a._v("見出し1=h1 ")]),a._v(" "),t("dd",[a._v("見出し2=h2 ")]),a._v(" "),t("dd",[a._v("見出し3=h3  ")]),a._v(" "),t("dd",[a._v("見出し4=h4  ")]),a._v(" "),t("dd",[a._v("見出し5=h5 ")]),a._v(" "),t("dd",[a._v("見出し6=h6 ")])]),a._v("\nとなります。\n"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 見出し1\n## 見出し2\n### 見出し3\n#### 見出し4\n##### 見出し5\n######　見出し6\n")])])]),t("h2",{attrs:{id:"_2-改行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-改行"}},[a._v("#")]),a._v(" 2.改行")]),a._v(" "),t("p",[a._v("改行を入れるためにはいくつかのルールがあります。")]),a._v(" "),t("ol",[t("li",[a._v("文末に半角スペースを２つ追加")]),a._v(" "),t("li",[a._v("文の間に1行空白の行を入れる")]),a._v(" "),t("li",[a._v("brタグを使う")])]),a._v(" "),t("p",[a._v("それぞれのサンプル↓")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#半角スペースを２つ追加\nサンプル  \nサンプル  \nサンプル\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#文の間に1行空白の行を入れる\nサンプル\n\nサンプル\n\nサンプル\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#brタグを使う\nサンプル<br>\nサンプル<br>\nサンプル\n")])])]),t("p",[a._v("HTMLをVScodeなどのエディタを使用して書いている人はbrタグが良いかと思ったんですが、"),t("br"),a._v("\nmdファイルで書いているときには"),t("strong",[a._v("emmetが使用できませんでした")]),a._v("。(Markdown専用のエディタなども存在しているようです)"),t("br"),a._v("\nなので、まだ慣れませんが私は毎回文末に半角スペースを２つ追加して改行しています。")]),a._v(" "),t("h2",{attrs:{id:"_3-各種コードの挿入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-各種コードの挿入"}},[a._v("#")]),a._v(" 3.各種コードの挿入")]),a._v(" "),t("p",[a._v("例えば、HTML,CSS,JavaScript,PHPなどのコードをコードとしてメモ又は表示させたい時に使用するのが下記の記法です。"),t("br"),a._v("\n自動で"),t("strong",[a._v("シンタックスハイライト")]),a._v("を適用することができます。")]),a._v(" "),t("p",[a._v("サンプル↓")]),a._v(" "),t("p",[t("strong",[a._v("```")])]),a._v(" "),t("p",[a._v("sample1")]),a._v(" "),t("p",[t("strong",[a._v("```")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\nsample1\n\n")])])]),t("p",[a._v("このように、シンタックスハイライトを適用させたい箇所に"),t("br"),a._v(" "),t("strong",[a._v("バッククオート3個ずつ")]),a._v("を上下に配置してあげます。")]),a._v(" "),t("p",[a._v("また、下記のように``又は`で囲ってあげると"),t("br"),a._v(" "),t("strong",[a._v("インラインコードとして")]),a._v("表示することができます。")]),a._v(" "),t("p",[t("strong",[a._v("``")])]),a._v(" "),t("p",[a._v("sample2")]),a._v(" "),t("p",[t("strong",[a._v("``")])]),a._v(" "),t("p",[t("code",[a._v("sample2")])]),a._v(" "),t("p",[t("strong",[a._v("`")])]),a._v(" "),t("p",[a._v("sample3")]),a._v(" "),t("p",[t("strong",[a._v("`")])]),a._v(" "),t("p",[t("code",[a._v("sample3")])]),a._v(" "),t("h2",{attrs:{id:"_4-文字の強調"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-文字の強調"}},[a._v("#")]),a._v(" 4.文字の強調")]),a._v(" "),t("p",[a._v("アンダースコア「_」2個ずつで文頭と文末を囲みます。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("__サンプル__\n")])])]),t("p",[t("strong",[a._v("サンプル")])]),a._v(" "),t("h2",{attrs:{id:"_5-イタリック体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-イタリック体"}},[a._v("#")]),a._v(" 5.イタリック体")]),a._v(" "),t("p",[a._v("アンダースコア「_」1個ずつで文頭と文末を囲みます。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("_サンプル_\n")])])]),t("p",[t("em",[a._v("サンプル")])]),a._v(" "),t("h2",{attrs:{id:"_6-打ち消し線"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-打ち消し線"}},[a._v("#")]),a._v(" 6.打ち消し線")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("~~サンプル~~\n")])])]),t("p",[t("s",[a._v("サンプル")])]),a._v(" "),t("h2",{attrs:{id:"_7-折りたたみ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-折りたたみ"}},[a._v("#")]),a._v(" 7.折りたたみ")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<details><summary>サンプル</summary>サンプルです。</details>\n")])])]),t("details",[t("summary",[a._v("サンプル")]),a._v("サンプルです。")])])}),[],!1,null,null,null);_.default=v.exports}}]);