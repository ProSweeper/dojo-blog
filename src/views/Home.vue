<template>
  <h1>Home</h1>
  <PostList :posts="posts" v-if="showPosts"/>
  <button  @click="showPosts = !showPosts">Toggle Posts</button>
</template>

<script>
  import PostList from '@/components/PostList.vue'
  import { ref } from 'vue'

  export default {
    name: "Home",
    components: {PostList},
    setup() {
      const posts = ref([
        { title: "welcome to the blog", body: "lorem ipsum", id: 1},
        { title: "Top 5 CSS Tips", body: "lorem ipsum", id: 2},
      ])
      const showPosts = ref(true)
      return { posts, showPosts }
    }
  }
</script>