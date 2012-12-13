##概要
プレゼン利用を考慮したスライド

##使い方
    <section id="slide1" class="slide">
    <div class="cont">
    <h1>ここにスライドの名前を</h1>
    内容をここに
    </div>
    </section>
* id名は「slide1」～「slide10」と連番で付けていく
* CSSはbodyとcontクラスに自由に付与
* 矢印「↓」キーを押すとスライドが下に
* 矢印「↑」キーを押すとスライドが上に
* テンキーの「1」～「10」で該当スライドまでスクロール
* 矢印「→」キーを押すとナビが出る
* 矢印「←」キーを押すとナビが隠れる
* ナビにはスライドの見出しが出る

##オプション
    color:'dark',					//dark, blue, purple, pink, green
    speed:600,						//800　スライドするピード
    moving:'easeOutExpo',	//swing　動き
    navLabel:'Navi'				//Navigationのラベル