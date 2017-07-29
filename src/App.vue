<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  export default {
      name: 'app'
  }
</script>

<style>
    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
        margin:0;
        padding:0;
        border:0;
        outline:0;
        font-size:100%;
        vertical-align:baseline;
        background:transparent;
    }
    body{
        font: 12px/1.5 "hiragino sans gb",arial;
        color: #555;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-user-select: none;
        background: #f4f4f4;
    }
    h1,h2,h3,h4,h5,h6,em,i {
        font-weight: 100;
        font-style: normal
    }
    ul,ol,li {
        list-style-type: none
    }
    a {
        color: #666;
        text-decoration: none;
        outline: 0
    }
    a:hover {
        text-decoration: none
    }
    a:active {
        color: transparent;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
    }
</style>
