<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/img/logo.png" alt="logo" />
        <span>后台项目管理平台</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 导航栏 -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409fff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)"
            >
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <div class="toggle-button" @click="toggleCollapse">|||</div>
        </el-menu>
      </el-aside>
      <!-- 页面主题部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: "用户管理",
          icon: "el-icon-user-solid",
          children: [{ id: 11, name: "用户列表", path: "users" }]
        },
        {
          id: 2,
          name: "权限管理",
          icon: "el-icon-s-check",
          children: [
            { id: 21, name: "角色列表", path: "roles" },
            { id: 22, name: "权限列表", path: "rights" }
          ]
        },
        {
          id: 3,
          name: "商品管理",
          icon: "el-icon-shopping-bag-2",
          children: [
            { id: 31, name: "商品列表", path: "" },
            { id: 32, name: "分类参数", path: "" },
            { id: 33, name: "商品分类", path: "" }
          ]
        },
        {
          id: 4,
          name: "订单管理",
          icon: "el-icon-notebook-2",
          children: [{ id: 41, name: "订单管理", path: "" }]
        },
        {
          id: 5,
          name: "数据统计",
          icon: "el-icon-pie-chart",
          children: [{ id: 51, name: "数据统计", path: "" }]
        }
      ],
      isCollapse: false, //是否折叠
      activePath: "" //被激活的链接地址
    };
  },
  created() {
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
    //折叠菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    //保存菜单链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
  img {
    height: 30px;
    width: 30px;
  }
}
.el-aside {
  background-color: #545c64;
  .el-menu {
    border-right: none;
    height: 100%;
  }
}
.el-main {
  background-color: #eaedf1;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
