<template>
  <div class="home">
    <h1>Testing</h1>
    
    <h2>refs</h2>
    <p ref="paragraph">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <button @click="handleClick2">Click Me Too</button>
    <input type="text" v-model="name">

    <br>
    
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update NinjaOne</button>
    
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
    
  </div>
</template>

<script>
import { ref, reactive} from 'vue'

export default {
  name: 'Testing',
  setup() {
    // const makes the ref itself constant, the value is mutable
    const name = ref('mario')
    const age = ref(20)
    const ninjaOne = ref({ name: "steve", age: 40})
    const ninjaTwo = reactive({ name: 'mike', age: 35 })
    
    const paragraph = ref(null)

    const handleClick = () => {
      console.log(paragraph.value)
      paragraph.value.classList.add("test")
      paragraph.value.textContent = 'hello there'
    }

    const handleClick2 = () => {
      name.value = 'luigi'
      age.value = '23'
    }

    const updateNinjaOne = () => {
      ninjaOne.value.age ++
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age ++
    }

    return {
      name, 
      age, 
      paragraph, 
      ninjaOne, 
      ninjaTwo,
      handleClick, 
      handleClick2, 
      updateNinjaOne,
      updateNinjaTwo,
    }
  },
}
</script>
