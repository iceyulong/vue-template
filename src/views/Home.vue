<template>
  <div class="home">
      <!-- <ul>
      <li v-for="item in list" :key="item.id">
          <p>姓名:{{ item.name }}</p>
          <p>年龄:{{ item.age }}</p>
      </li>
      </ul>
      <el-button @click="visible = true">{{$t("message.login")}}</el-button>
      <el-button>{{$t("message.Language")}}</el-button>
      <el-select v-model="value" :placeholder="$t('message.placeholder')">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <p>{{$t('message.zh')}}</p>

      <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
              {{$t('message.Language')}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh">{{$t('message.zh')}}</el-dropdown-item>
              <el-dropdown-item command="en">{{$t('message.en')}}</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      <el-button @click="handleLan('zh')">
        {{$t('message.zh')}}
      </el-button>
      <el-button @click="handleLan('en')">
        {{$t('message.en')}}
      </el-button> -->
      <el-container >
        <el-aside >
          <el-input type="primary" placeholder="请输入" v-model="num"></el-input>
        </el-aside>
        <el-container >
          <el-header >Header</el-header>
          <el-main >Main</el-main>
          <el-footer >Footer</el-footer>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'Home',
  data () {
    return {
      options: [],
      value: '',
      num: ''
    }
  },
  computed: {
    list () {
      return this.$store.state.list
    }
  },
  mounted () {
    this.getlist()
  },
  methods: {
    getlist () {
      this.$store.dispatch('getData')
    },
    handleCommand (val) {
      var array = [1]
      var other = _.concat(array, 2, [3], [[4]])
      console.log(other)
      val === 'zh' ? this.$i18n.locale = 'zh' : this.$i18n.locale = 'en'
    },
    handleLan (val) {
      val === 'zh' ? this.$i18n.locale = 'zh' : this.$i18n.locale = 'en'
    }
  }
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
