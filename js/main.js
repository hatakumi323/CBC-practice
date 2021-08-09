$(function() {
    $('.modal-open').click(function(){  /* クラス名をクリックしたら */
      $('body').append('<div class="modal-overlay"></div>');  /* bodyにオーバーレイの要素を追加 */
      $('.modal-content, .modal-overlay').fadeIn('slow');  /* モーダルコンテンツ要素とオーバーレイ要素をフェードイン */
  
      $('.modal-content').click(function(){                   /* オーバーレイをクリックしたら削除する機能 */
        $('.modal-content, .modal-overlay').fadeOut('slow',function(){  /* モーダルコンテンツ要素とオーバーレイ要素をフェードアウトし、*/
          $('.modal-overlay').remove() ;                           /* オーバーレイ要素を削除*/
        });
      });
  
      modalResize();                          /* モーダル起動&リサイズしたら、再計算させる*/
  
      function modalResize(){                 /* 関数を設定　*/
        var w = $(window).width();            /* ウィンドウの横幅、高さを取得し、変数に入れる */
        var h = $(window).height();
        var cw = $('.modal-content').outerWidth();  /* モーダルコンテンツの表示位置を取得し、変数に入れる */
        var ch = $('.modal-content').outerHeight();
        $('.modal-content').css({                   /* 取得した数値をモーダルコンテンツにcssを付与 */
          'left' : ((w - cw)/2) + 'px',       /* cssのleftプロパティ */
          'top'  : ((h - ch)/2) + 'px'        /* cssのtopプロパティ */
        });
      }
  
    });
  });