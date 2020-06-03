<template>
        <div class="home">
            <ul>
            <li v-for="item in list" :key="item.id">
                <p>姓名:{{ item.name }}</p>
                <p>年龄:{{ item.age }}</p>
            </li>
            </ul>
            <el-button @click="visible = true">{{now}}</el-button>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
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
    }
  }
}
</script>
