var NOWSCREEN = '#screen_top';/* 現在表示中の画面 */
var PRESCREEN = '';/* 一つ前の画面 */

QiSession(function(session) {
    session.service('ALMemory').then(function(ALMemory){
        /* TOP画面初期表示時に
        画面表示セリフを発話させる */
        ALMemory.raiseEvent("sample_app/speech", "スタートボタンをタップしてね。");

        /* <画面ボタン>がタップされた */
        $('.screen_buttons').on('touchend', function(){
            /* 遷移先画面id取得 */
            var id = $(this).attr('id');
            var screenNum = id.slice(-1);
            var screenId = "#screen_" + screenNum;
            /* 画面を切り替える */
            switchDisplay(NOWSCREEN, screenId);
        });

        /* 「TOPへ戻る」ボタンがタップされた */
        $('.button_top').on('touchend', function(){
            /* 遷移先画面id取得 */
            var screenId = "#screen_top";
            /* 画面を切り替える */
            switchDisplay(NOWSCREEN, screenId);
        });

        /* 「戻る」ボタンがタップされた */
        $('.button_back').on('touchend', function(){
            /* 遷移先画面id取得 */
            var screenId = PRESCREEN;
            /* 画面を切り替える */
            switchDisplay(NOWSCREEN, PRESCREEN);
        });

        /* 挨拶ボタンがタップされた */
        $('.salue').on('touchend', function(){
            /* 画面を切り替える */
            ALMemory.raiseEvent("sample_app/salue", 1);
        });


        /**
         * 画面切り替え関数
         * @param {string} currentDiv - 現在表示中要素のセレクタ
         * @param {string} nextDiv - 切り替え先要素のセレクタ
         * @return {string} - 切り替え先画面でPepperが発話するセリフ
         */
        function switchDisplay(currentDiv, nextDiv){
            $(currentDiv).addClass('display_none');
            $(nextDiv).removeClass('display_none');
            NOWSCREEN = nextDiv;
            PRESCREEN = currentDiv;
            var returnSpeechText = '';
            var returnSalueText = '';
            switch(nextDiv){
                case "#screen_top":
                    returnSpeechText = "スタートボタンをタップしてね。"
                    returnSalueText = "トップ画面の挨拶"
                    break;
                case "#screen_1":
                    returnSpeechText = "画面１を表示しました。"
                    returnSalueText = "画面１の挨拶"
                    break;
                case "#screen_2":
                    returnSpeechText = "画面２を表示しました。"
                    returnSalueText = "画面２の挨拶"
                    break;
                case "#screen_3":
                    returnSpeechText = "画面３を表示しました。"
                    returnSalueText = "画面３の挨拶"
                    break;
                case "#screen_4":
                    returnSpeechText = "画面４を表示しました。"
                    returnSalueText = "画面４の挨拶"
                    break;
                case "#screen_5":
                    returnSpeechText = "画面５を表示しました。"
                    returnSalueText = "画面５の挨拶"
                    break;
            }
            /* 挨拶ボタン用セリフを登録する */
            ALMemory.insertData("sample_app/salue_text", returnSalueText);
            /* 画面表示セリフを発話する */
            ALMemory.raiseEvent("sample_app/speech", returnSpeechText);
        }
    });
});


