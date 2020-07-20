<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!-- 搜索与添加 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域 -->
      <el-table :data="userList" border stripe>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" @change="userStateChange(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
            <!-- 分配角色按钮 -->
            <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1, //当前的页数
        pagesize: 5 //每页显示数据
      },
      userList: [
        {
          username: "admin",
          email: "123@qq.com",
          mobile: "18012341234",
          role_name: "管理员",
          mg_state: true
        },
        {
          username: "hujian",
          email: "456@qq.com",
          mobile: "18012345678",
          role_name: "用户",
          mg_state: false
        },
        {
          username: "xiaoA",
          email: "789@qq.com",
          mobile: "18012346666",
          role_name: "用户",
          mg_state: false
        },
        {
          username: "xiaoB",
          email: "111@qq.com",
          mobile: "18012349999",
          role_name: "用户",
          mg_state: false
        }
      ],
      total: 4
    };
  },
  create() {
    this.getUserList();
  },
  methods: {
    getUserList() {},
    handleSizeChange(newSize) {
      console.log("新的一页页数:", newSize);
      this.queryInfo.pagesize = newSize;
    },
    handleCurrentChange(newPage) {
      console.log("当前在第几页:", newPage);
    },
    userStateChange(userInfo) {
      console.log("userInfo:", userInfo);
    }
  }
};
</script>

<style lang="less" scoped>
</style>