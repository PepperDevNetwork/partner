QiSession(function(session) {
    session.service('ALMemory').then(function(ALMemory){
        /* ボタンタップ */
        $('#button1').on('touchend', function(){
            /* HTTP request 開始イベント発火 */
            ALMemory.raiseEvent("sample_app/button1", 1);
            $(this).addClass('display_none');
            $('img').removeClass('display_none')
        });
    });
});