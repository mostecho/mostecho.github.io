---
title: 弹幕
date: 2025-04-24 12:30:36
type: 'collect'
---

<style>
#article-container a:not(.headerlink, .fancybox, .default-style a) {
    font-weight: 700;
    color: var(--font-color);
    padding: 0 3px;
    border-bottom: 2px var(--leonus-main) solid;
}

#article-container a:not(.headerlink, .fancybox, .default-style a):hover {
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    background-color: var(--leonus-main);
}

#danmu {
    width: 100%;
    height: calc(100% - 60px);
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 1;
    pointer-events: none;
}

.hidedanmu {
    opacity: 0;
}

.hidedanmu * {
    pointer-events: none !important;
}

div#danmuBtn {
    display: flex;
    justify-content: center;
}

div#danmuBtn button {
    background: var(--leonus-main);
    color: white;
    padding: 8px 20px;
    margin: 0 20px;
    border-radius: 100px;
}

.default-style {
    pointer-events: all;
    cursor: pointer;
    font-size: 16px;
    border-radius: 100px;
    overflow: hidden;
}

.default-style a {
    background-color: rgba(0, 0, 0, 0.5);
    transition: .3s;
    color: #eee !important;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 16px 6px 6px;
    text-decoration: none !important;
}

.default-style a:hover {
    background-color: rgba(0, 0, 0, 0.7);
}

.default-style img {
    pointer-events: none;
    height: 30px;
    width: 30px;
    margin: 0 5px 0 0 !important;
    border-radius: 50% !important;
}

.default-style p {
    line-height: 1;
    pointer-events: none;
    margin: 0 !important;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

{% note success  flat %}
如果有什么 **想说的**、**想问的** 或者 **发现了本站的BUG**，欢迎留言告知😊。
{% endnote %}

{% note pink 'fa-solid fa-link'  flat %}
若想 **添加友链** 请前往 [友情链接](/link/) 页面进行友链申请😄
{% endnote %}

<div id="danmuBtn"></div>
<div id="danmu"></div>