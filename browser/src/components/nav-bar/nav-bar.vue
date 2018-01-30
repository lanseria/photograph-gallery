<template lang="pug">
  .nav-title-wrapper
    .name-title
      h1 vhikzhangchao
    .info-box
      ul.info
        li.job
          h4 FE Programmer
        li
          p +86 18858395625
        li
          p
            a(href="#") 564265135@qq.com
    .links-wrapper
      ul.social-link
        li
          a(href="#")
            i.qicon.icon-weibotaidu
        li
          a(href="#")
            i.qicon.icon-github
        li
          a(href="#")
            i.qicon.icon-QQ
      ul.nav-link
        li
          a(href="#") PHOTO
        li
          a(href="#") WALLPAPER
        li
          a(href="#") LAST
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.nav-title-wrapper
  display flex
  justify-content center
  align-items center
  min-width 1024px
  height 200px
  .name-title
    flex 0 0 300px
    h1
      font-family "proxima-nova"
      font-size 52px
      line-height 1em
      text-transform none
      letter-spacing .01em
      font-weight 300
      font-style normal
      color #222
  .info-box
    flex 0 0 200px
    margin-left 20px
    ul.info
      li
        font-size 18px
        font-family -webkit-pictograph
        font-style normal
        color #222
      .job
        line-height 1.4em
        text-transform uppercase
        letter-spacing .14em
        font-weight 600
  .links-wrapper
    display flex
    .social-link
      display flex
      flex 1
    .nav-link
      display flex
      flex 1
      li
        margin-right 5px
</style>
