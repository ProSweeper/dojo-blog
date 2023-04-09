<template>
  <div>
    <h1>Names</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in names" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
  import { computed, ref } from 'vue';
  import { watch, watchEffect } from 'vue';

  export default {
    name: 'Names',
    setup() {
      const search = ref('')
      const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

      const stopWatch = watch(search, () => {
        console.log('watch function ran')
      })

      const stopEffect = watchEffect(() => {
        console.log('watch effect function ran', search.value)
      })

      const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value))
      })

      const handleClick = () => {
        stopWatch()
        stopEffect()
      }

      return {names, search, matchingNames, stopEffect, stopWatch, handleClick}
    }
  }
</script>