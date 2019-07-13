<template>
  <aside>
    <h3>门店</h3>
    <div>
      <p>
        <router-link to="/home/first">首页</router-link>
      </p>
    </div>
    <div>
      <p @click="u">会员管理</p>
      <ul v-show="$store.state.show">
        <li>
          <keep-alive>
            <router-link to="/home/register">会员注册</router-link>
          </keep-alive>
        </li>
        <li>
          <keep-alive>
            <router-link to="/home/query">会员查询</router-link>
          </keep-alive>
        </li>
        <li>
          <keep-alive>
            <router-link to="/home/compile">编辑</router-link>
          </keep-alive>
        </li>
        <li>
          <keep-alive>
            <router-link to="/home/recharge">充值</router-link>
          </keep-alive>
        </li>
      </ul>
    </div>
    <div>
      <p @click="u1">预订</p>
      <ul v-show="$store.state.show1">
        <li>
          <keep-alive>
            <router-link to="/home/y_manage">预订管理</router-link>
          </keep-alive>
        </li>
        <li>
          <keep-alive>
            <router-link to="/home/accept">受理预订</router-link>
          </keep-alive>
        </li>
      </ul>
    </div>
    <div>
      <p @click="u2">费用结算</p>
      <ul v-show="$store.state.show2">
        <li>
          <keep-alive>
            <router-link to="/home/f_manage">结算管理</router-link>
          </keep-alive>
        </li>
        <li>
          <keep-alive>
            <router-link to="/home/valildate">验车</router-link>
          </keep-alive>
        </li>
        <li>
          <keep-alive>
            <router-link to="/home/mess">结算信息</router-link>
          </keep-alive>
        </li>
      </ul>
    </div>
    <div>
      <p>
        <keep-alive>
          <router-link to="/home/car_manage">车辆管理</router-link>
        </keep-alive>
      </p>
    </div>
  </aside>
</template>
<script>
export default {
  methods: {
    u() {
      this.$store.commit("u");
    },
    u1() {
      this.$store.commit("u1");
    },
    u2() {
      this.$store.commit("u2");
    }
  }
};
</script>
<style lang="less" scoped>
aside {
  color: white;
  float: left;
  width: 300px;
  height: 555px;
  background: rgb(67, 67, 67);
  h3 {
    font-size: 18px;
    font-weight: normal;
  }
  ul {
    li {
      list-style: none;
      a {
        font-size: 14px;
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
    display: block;
  }
  .router-link-active {
    background: rgb(255, 212, 9);
    border-left: 7px solid white;
  }
}
h3,
p,
li {
  height: 40px;
  line-height: 40px;
  text-indent: 113px;
  font-size: 16px;
}
p:hover{
    cursor: pointer;
}
</style>


