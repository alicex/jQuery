##概要
jQuery モーダルウィンドウの画像用のプラグインです。
* a要素に拡大後の画像を指定
* 画像の幅と高さがすべて同じギャラリー向け
* 画像のalt値がキャプションになります
* a要素に「rel="mImage"」を付与するとグルーピングされます（NEXT、BACK表示）

##オプション
* innerWidth:600,		//画像の幅を入れる ※必須
* innerHeight:400,  //画像の高さを入れる ※必須
* outerWidth:0,			//デザインでモーダルウィンドウの幅を決める時はその幅を入力
* outerHeight:0,		//デザインでモーダルウィンドウの高さを決める時はその幅を入力
* speed:300,				//ふわっと出るスピード
* backColor:'#000',	//後ろのレイヤーの色
* backAlpha:0.6			//後ろのレイヤーの透明度

##レイアウト概要

	#modalWindow
	  |
	  + #modalCont
	      |
	      + #mw-cont
	          |
	          + img
	          + #mw-caption
	      + #mw-close
	      + #mw-control
	          |
	          + a#prev
	          + a#next