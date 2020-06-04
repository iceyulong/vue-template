<template>
  <div class="home">
      <ul>
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
      </el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      options: [],
      value: ''
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
      val === 'zh' ? this.$i18n.locale = 'zh' : this.$i18n.locale = 'en'
    },
    handleLan (val) {
      val === 'zh' ? this.$i18n.locale = 'zh' : this.$i18n.locale = 'en'
    }
  }
}
</script>
