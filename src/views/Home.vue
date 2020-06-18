<template>
  <div class="home">
    <el-container>
      <el-aside>
        <el-menu :default-openeds="[1,2,3]" router>
          <el-submenu v-for="item in menuData.list" :key="item.id" index="item.id">
              <template slot="title">
                <div class="aside-menu">
                  <i :class="item.icon"/>
                  <span>{{item.name}}</span>
                </div>
              </template>
              <el-menu-item index="secPackComp">{{item}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <keep-alive >
              <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import _ from 'lodash'
import MENU_LIST from '../constant/menu'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  computed: {
    menuData () {
      return this.findDataFromMenu(MENU_LIST, 0)
    }
  },
  methods: {
    findDataFromMenu (list, level, lastList) {
      for (let i = 0; i < list.length; i += 1) {
        const {
          url,
          children
        } = list[i]
        if (this.$route.path.indexOf(url) === 0) {
          level += 1
          lastList = list
          if (children !== undefined) {
            return this.findDataFromMenu(children, level, list)
          }
          break
        }
      }
      return {
        list: lastList === undefined ? list : lastList,
        level
      }
    }
  }
}
</script>
<style scoped>
@import url(./../../node_modules/element-ui/lib/theme-chalk/display.css);
</style>

<style lang="scss" scoped>
.home{
  height:100%;
  .el-container{
    height:100%;
    .el-aside{
      height:100%;
      width: 150px !important;
      border-right:solid 1px #e6e6e6;
      .el-menu{
        border-right:none;
        .aside-menu{
          height: 100%;
          width: 90px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .icon-bug{
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
