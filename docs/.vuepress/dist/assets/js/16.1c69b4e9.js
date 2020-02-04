(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{248:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"gitコマンド「checkout」の使い方、オプション等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitコマンド「checkout」の使い方、オプション等"}},[t._v("#")]),t._v(" gitコマンド「checkout」の使い方、オプション等")]),t._v(" "),e("p",[t._v("gitで作業し始めて、コマンドのオプションなど\n備忘録を記します。")]),t._v(" "),e("h2",{attrs:{id:"checkoutの使い方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkoutの使い方"}},[t._v("#")]),t._v(" checkoutの使い方")]),t._v(" "),e("blockquote",[e("p",[t._v("Gitのチェックアウト(checkout)とは、一言で言うと「ブランチを切り替えたいとき」に使用するコマンドです。")])]),t._v(" "),e("p",[t._v("私は、普段ブランチの切り替えはソースツリーから行っていますが、"),e("br"),t._v("\n既存のブランチから新規ブランチを作成する場合、ターミナルからコマンドを使用しています。")]),t._v(" "),e("p",[t._v("↓ソースツリーでのブランチ切り替え（◯が現在のブランチ）"),e("br"),t._v(" "),e("img",{attrs:{src:"/assets/img/20200203.png",alt:"ソースツリー 画面"}})]),t._v(" "),e("h3",{attrs:{id:"既存のブランチに切り替えを行う場合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#既存のブランチに切り替えを行う場合"}},[t._v("#")]),t._v(" 既存のブランチに切り替えを行う場合")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout ブランチ名\n")])])]),e("p",[t._v("上記のコマンドでブランチの切り替えを行うことが出来ます。")]),t._v(" "),e("h3",{attrs:{id:"新規のブランチに切り替えを行う場合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新規のブランチに切り替えを行う場合"}},[t._v("#")]),t._v(" 新規のブランチに切り替えを行う場合")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -b ブランチ名\n")])])]),e("p",[t._v("上記のコマンドで新規ブランチを作成し、同時に切り替えを行います。\nオプション：-b")]),t._v(" "),e("h3",{attrs:{id:"強制的にブランチの切り替えを行う場合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#強制的にブランチの切り替えを行う場合"}},[t._v("#")]),t._v(" 強制的にブランチの切り替えを行う場合")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -f  ブランチ名\n")])])]),e("p",[t._v("上記のコマンドで強制的に切り替えを行います。\n※通常、変更が残っている場合ブランチの切り替えは中断されます。\n※変更を破棄しても良い場合に上記のオプションを使用してください。\nオプション：-f")]),t._v(" "),e("h2",{attrs:{id:"トラブル事例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#トラブル事例"}},[t._v("#")]),t._v(" トラブル事例")]),t._v(" "),e("p",[t._v("トラブルというと大げさですが、"),e("br"),t._v("\nコマンドについてちゃんと理解出来ていないことで起きた事象を紹介します。")]),t._v(" "),e("h3",{attrs:{id:"通常時の作業手順"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通常時の作業手順"}},[t._v("#")]),t._v(" 通常時の作業手順")]),t._v(" "),e("p",[t._v("いつもの手順、")]),t._v(" "),e("ol",[e("li",[t._v("masterからdevelopに切り替え")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout develop\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("developから新規作業ブランチを作成")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -b 作業ブランチ名\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("コミット後、作業ブランチをdevelopにpush")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push origin 作業ブランチ名\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("git上でpull request")])]),t._v(" "),e("p",[t._v("通常、上記の流れで作業・反映を行っています。")]),t._v(" "),e("h3",{attrs:{id:"トラブル時の手順"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#トラブル時の手順"}},[t._v("#")]),t._v(" トラブル時の手順")]),t._v(" "),e("p",[t._v("初めて作業をするリポジトリをクローン"),e("br"),t._v("\n↓"),e("br"),t._v("\nローカルにてmasterからdevelopにcheckout")]),t._v(" "),e("p",[t._v("その際、-b のオプションを付けたコマンドを叩いてしまいました。"),e("br"),t._v("\nそうすると、developから新規作成した作業ブランチもoriginがmasterになってしまいます。")]),t._v(" "),e("p",[t._v("pull requestの際にdevelopじゃなくてmasterにpushしてるじゃん!?"),e("br"),t._v("\nという事がありました。")]),t._v(" "),e("p",[t._v("急遽リモートの作業ブランチとローカルの新規developを削除して、\n再度、オプション無しのcheckoutコマンドにて切り替えを行いました。")]),t._v(" "),e("p",[t._v("ブランチの"),e("strong",[t._v("originを確認するコマンド")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git show-branch | grep '*' | grep -v \"$(git rev-parse --abbrev-ref HEAD)\" | head -1 | awk -F'[]~^[]' '{print $2}'\n")])])]),e("h2",{attrs:{id:"参考リンク"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考リンク"}},[t._v("#")]),t._v(" 参考リンク")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.sejuku.net/blog/71457",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Git入門】チェックアウト(checkout)とは？使い方を基礎から解説！"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);