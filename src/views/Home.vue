<template>
        <div class="home">
            <ul>
            <li v-for="item in list" :key="item.id">
                <p>姓名:{{ item.name }}</p>
                <p>年龄:{{ item.age }}</p>
            </li>
            </ul>
        </div>
    </template>

<script>
export default {
  name: 'Home',
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
