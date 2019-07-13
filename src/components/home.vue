<template>
  <div class="home">
      <!-- 头部 -->
    <header>
      <div class="left">平架后台管理系统</div>
      <div class="right">
        <img src alt="头像" />
        <span>中午好！茜茜</span>
        <span></span>
      </div>
    </header>
    <div class='container'>
        <Aside></Aside>
        <section>
          <router-view></router-view>
        </section>
    </div>
  </div>
</template>

<script>
import Aside from './aside'
export default {
  components:{
    Aside,
  }
};
</script>

<style scopde lang='less'>
*{
      padding:0;
      margin:0;
    }
.home {
  header {
    height: 100px;
    background: rgb(27, 27, 27);
    color: white;
    overflow: hidden;
    .left {
      float: left;
      line-height: 100px;
      margin-left: 51px;
      font-size: 23px;
    }
    .right {
      line-height: 100px;
      float:right;
      margin-right:20px;
      font-size:16px;
      img {
        width: 62px;
        height: 62px;
        border-radius: 50%;
      }
      span:nth-of-type(2) {
          display: inline-block;
          width:88px;
          height:21px;
          background:white;
          margin-left:45px;
      }
    }
  }
  .container{
      overflow: hidden;
      section{
        float: left;
      }
  }
}
</style>

