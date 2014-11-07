'use strict';

enchant();

var CHARA_IMAGE = "///home/s13008/enchant/chara2.gif";


window.onload = function() {

  var game = new Game(); 
  game.preload(CHARA_IMAGE);  //画像を読み込み	

  game.onload = function() {

    var scene = game.rootScene; 
    scene.backgroundColor = "black"; //背景色

    var touchFunc = function() {

      this.parentNode.removeChild(this); //タッチして消す

    };

    //猪を生成
    var x  = Math.floor(Math.random() * 50);

    for (var i=0; i<x; ++i) {     

      var boar = new Boar(32, 32);
      boar.moveTo(Math.random()*(320-32), Math.random()*(320-32)); //ランダムな位置に
      boar.image = game.assets[CHARA_IMAGE]; //画像をセット
      boar.ontouchstart = touchFunc; //タッチイベント登録 
      scene.addChild(boar);
    }

    scene.onenterframe = function() {

       if (scene.childNodes.length ==  0) { 

        alert("Game Clear !!"); 
        scene.onenterframe = null;

      }
    };
    };

    game.start();

  };
