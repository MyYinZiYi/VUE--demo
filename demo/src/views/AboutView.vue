<template>
  <div class="about">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside :width="isCollapse == true ? '60px' : '200px'">
          <i class="el-icon-s-tools" @click="isCollapse = !isCollapse">首页</i>
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            v-for="(item, index) in listData"
            :key="item.id"
          >
            <el-submenu :index="item.path">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.title}}</span>
              </template>
              <el-menu-item-group v-for="(it,i) in item.children " :key="i.id">
                <el-menu-item :index="it.path">{{it.title}}</el-menu-item>
                <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
              </el-menu-item-group>
            </el-submenu>
          </el-menu></el-aside
        >
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { queryInitMenus } from "../request/Api.js";
export default {
  data() {
    return {
      isCollapse: true,
      listData: [],
    };
  },
  created() {
    queryInitMenus().then((res) => {
      console.log(res);
      this.listData = res.data.permissionList;
    });
  },
};
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
