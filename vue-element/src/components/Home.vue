<template>
  <el-container>

    <!-- Header头部内容 -->
    <el-header>
      <p class="title">Vue-Element后台管理系统</p>
    </el-header>
    <!-- container -->
    <el-container>
      <!-- Aside侧边栏导航 -->
      <el-aside width="200px">
        <!-- <el-radio-group v-model="isCollapse"  size='small'>
          <el-radio-button :label="false" size='small'>展开</el-radio-button>
          <el-radio-button :label="true" size='small'>收起</el-radio-button>
        </el-radio-group> -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          :collapse="isCollapse" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">chart</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">table</span>
            </template>
            <el-menu-item-group>
              <span slot="title">基础表格</span>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="功能表格">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <span slot="title">选项4</span>
              <el-menu-item index="3-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">form</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- Main -->
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
      isCollapse: false,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key == 1) {
        this.$router.push('/chart')
      } else
        if (key == 2) {
          this.$router.push('/chart')
        } else
          if (key == '3-1') {
            this.$router.push('/table')
          } else
            if (key == 4) {
              this.$router.push('/form')
            }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: LightSkyBlue;
}
.title :hover {
  color: DodgerBlue;
}
/* element */
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  color: #333;
  text-align: left;
  padding-left: 200px;
  font-size: 24px;
  font-weight: 800;
  line-height: 60px;
  border-bottom: 1px solid gray;
}
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  /* border-right: 1px solid gray; */
  overflow: justify;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  overflow: justify;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 99%;
  min-height: 400px;
}
</style>
