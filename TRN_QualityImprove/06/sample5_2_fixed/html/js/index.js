QiSession(function(session) {
    session.service('ALMemory').then(function(ALMemory){
        /* ボタンタップ */
        $('#button1').on('touchend', function(){
            /* 処理中・・・画面に切り替え */
            switchDisplay('#button1', '#img1');
            /* HTTP request 開始イベント発火 */
            // ALMemory.raiseEvent('sample_app/button1', 1);
        });
    });
});

/**
 * 画面切り替え
 * @param {string} currentDiv - 現在表示中要素のセレクタ
 * @param {number} nextDiv - 切り替え先要素のセレクタ
 */
function switchDisplay(currentDiv, nextDiv){
    $(currentDiv).addClass('display_none');
    $(nextDiv).removeClass('display_none');
}