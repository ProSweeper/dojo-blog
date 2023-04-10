<template>
  <h1>Details</h1>
</template>

<script>
  import getPost from '../composables/getPost'
  export default {
    props: ['id'],
    setup(props) {
      const { post, error, load } = getPost(props.id)

      load()

      return {post, error}
    }
  }
</script>