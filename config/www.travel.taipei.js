/**
 * 適用網頁：https://www.travel.taipei/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1whsqwgC8Y_9gm5i8ISbUTb7vtDNYXmxH7JcQy15yToM/edit?usp=sharing
 * @author Pudding 20170203
 */

GA_TRACE_CODE = "UA-89833109-1";
CSS = "https://billxu0521.github.io/GA-project/config/www.travel.taipei.css";

var exec = function () {
    //初始化名字
    //check_user_id();
    set_user_id();

    //GL1-3 click
    mouse_click_event('a[title="臺北旅遊網"]', "GL1-3");

    //GL1-4 導覽列 click
    mouse_click_event("#btn-open-menu","GL1-4");

    //GL1-5 麵包屑/首頁 click
    mouse_scroll_event('.breadcrumb:eq(0)',"GL1-5");

    //GL1-6 click
    mouse_click_event(".unit:eq(0)","GL1-6");

    //G1-7 click
    mouse_click_event(".breadcrumb .unit:not(':eq(0)')","GL1-7");

    //GL1-8 搜尋列 click
    mouse_click_event('.btn-search-submit',"GL1-8");
    mouse_click_event('.gsc-search-button',"GL1-8");

    //GL2-2  更多xx
    mouse_click_event('.btn-more',"GL2-2");

    //GL2-5  收藏
    mouse_click_event('#btn-my-collection',"GL2-5");
    mouse_click_event('.btn-add-diamond.adj.js-add-diamond',"GL2-5");

    //GL2-6  底部
    mouse_scroll_event('.footer',"GL2-6");

    //GL2-8  電話
    mouse_click_event('.tel-link',"GL2-8");
    mouse_click_event('.info .btn-tel-link',"GL2-8");

    //GL2-10  底部條款
    mouse_scroll_event('.info .link-blk',"GL2-10");

    //GL2-11  勘誤
    mouse_click_event('.btn-report-issue',"GL2-11");

    //GL2-12  分享
    mouse_click_event('.btn-share-fb',"GL2-12");
    mouse_click_event('.btn-share-gplus',"GL2-12");
    mouse_click_event('.btn-share-twitter',"GL2-12");
    mouse_click_event('.btn-share-weibo',"GL2-12");
    mouse_click_event('.btn-share-line',"GL2-12");

    //GL2-13  分類資訊
    mouse_click_event('.menu-title',"GL2-13");
    mouse_click_event('.event-news-card-list .item .link',"GL2-13");
    mouse_click_event('.btn-theme-link',"GL2-13");

    //GL2-14  日期

    mouse_scroll_event('.info-blk .duration',"GL2-14");
    mouse_scroll_event('.info-blk .date',"GL2-14");

    //GL5-2  圖片
    mouseover_event('.media-switch-blk',"GL5-2")

    //GL5-3  互動
    mouse_click_event('.flickity-prev-next-button',"GL5-3");
    mouse_click_event('.flickity-prev-next-button',"GL5-3");
    mouse_click_event('.flickity-lazyloaded',"GL5-3");

    //mouse_click_event('.media-switch-blk',"GL5-3");
    mouse_click_event('.btn-media-photo',"GL5-3");
    mouse_click_event('.btn-media-video',"GL5-3");
    mouse_click_event('.btn-media-pano',"GL5-3");
    mouse_click_event('.btn-media-voice',"GL5-");

    //GL5-5  圖示設計
    mouse_click_event('.thumb',"GL5-5");
    mouse_click_event('.btn-open-menu',"GL5-5");

    //GL5-6  按鈕設計
    mouse_click_event('.thumb',"GL5-6");
    mouse_click_event('.btn-open-menu',"GL5-6");

    //GL6-2     
    mouse_click_event('a[title="臺北市政府|另開視窗"]',"GL6-2");
    mouse_click_event('a[title="各科室聯絡電話及傳真|另開視窗"]',"GL6-2");
    mouse_click_event('a[title="無障礙標章|另開視窗"]',"GL6-2");
    mouse_click_event('a[title="我的e政府|另開視窗"]',"GL6-2");
    mouse_click_event('a[title="Youbike|另開視窗"]',"GL6-2");
    mouse_click_event('a[title="臺北市政府觀光傳播局|另開視窗"]',"GL6-2");
};

// --------------------------------------

$(function () {
    $.getScript("https://www.google-analytics.com/analytics.js", function () {
        $.getScript("https://billxu0521.github.io/GA-project/ga_inject_lib.js", function () {
            load_css(CSS);
            setTimeout(function () {
                setup_ga();
                exec();
            }, 1000);
        });
    });
});