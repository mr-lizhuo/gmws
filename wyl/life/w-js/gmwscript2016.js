$.getJSON('http://motions.gmw.cn:8080/alcount.php?jsoncallback=?', function(data) {
    if(data.msg == 1){
        _atrk_opts = { atrk_acct:"4+gli1aUCm00OA", domain:"gmw.cn",dynamic: true};
        (function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://d31qbv1cthcecs.cloudfront.net/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();
        $('body').append('<noscript><img src="images/atrk.gif" style="display:none" height="1" width="1" alt="" /><\/noscript>');
    }
});