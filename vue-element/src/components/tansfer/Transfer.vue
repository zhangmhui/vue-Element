<template>
  <div class="main">
    <el-steps :active="active" align-center>
      <el-step title="步骤1" description="全局安装插件npm install el-tree-transfer --save"></el-step>
      <el-step title="步骤2" description="js引入组件import treeTransfer from 'el-tree-transfer'"></el-step>
      <el-step title="步骤3" description="js注册组件components: {treeTransfer}"></el-step>
      <el-step title="步骤4" description="使用组件<tree-transfer></tree-transfer>"></el-step>
    </el-steps>
    <el-button style="margin: 12px;" @click="next">下一步</el-button>
    <!-- <el-button @click="changeMode()">点击切换模式</el-button> -->
    <tree-transfer :title="title" :from_data='studentList' :to_data='SelectedList' :defaultProps="{label:'label'}"
      @addBtn='add' @removeBtn='remove' :mode='mode' height='540px' filter openAll>
    </tree-transfer>
  </div>
</template>  

<script>
import treeTransfer from 'el-tree-transfer' // 引入

export default {
  components: {
    treeTransfer
  },
  data() {
    return {
      title: ['待选项', '已选项'],
      mode: "transfer", // transfer addressList
      studentList: [
        {
          id: "1",
          pid: 0,
          label: "一级 1",
          children: [
            {
              id: "1-1",
              pid: "1",
              label: "二级 1-1",
              children: []
            },
            {
              id: "1-2",
              pid: "1",
              label: "二级 1-2",
              children: [
                {
                  id: "1-2-1",
                  pid: "1-2",
                  children: [],
                  label: "二级 1-2-1"
                },
                {
                  id: "1-2-2",
                  pid: "1-2",
                  children: [],
                  label: "二级 1-2-2"
                }
              ]
            },
            {
              id: "1-3",
              pid: "1",
              label: "二级 1-3",
              children: [
                {
                  id: "1-3-1",
                  pid: "1-3",
                  children: [],
                  label: "二级 1-3-1"
                },
                {
                  id: "1-3-2",
                  pid: "1-3",
                  children: [],
                  label: "二级 1-3-2"
                }
              ]
            },
          ]
        },
      ],
      SelectedList: [],
      active:1,//步骤
    }
  },
  methods: {
    // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList
    changeMode() {
      if (this.mode == "transfer") {
        this.mode = "addressList";
      } else {
        this.mode = "transfer";
      }
    },
    // 监听穿梭框组件添加
    add(studentList, SelectedList, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的        {keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log("studentList:", studentList);
      console.log("SelectedList:", SelectedList);
      console.log("obj:", obj);
    },
    // 监听穿梭框组件移除
    remove(studentList, SelectedList, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log("studentList:", studentList);
      console.log("SelectedList:", SelectedList);
      console.log("obj:", obj);
    },
    // 步骤条
    next() {
        if (this.active++ > 3) this.active = 1;
      }
  },
  comporents: { treeTransfer } // 注册
}

</script>
<style scoped>
.main /deep/ .transfer-main {
  background: white;
}
</style>


