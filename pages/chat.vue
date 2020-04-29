<template>
  <div>
      <form action="http://localhost:3000/upload/file" method="post" enctype="multipart/form-data">
        <input type="file" name="file" multiple="multiple" />
        <input type="submit" value="提交" />
      </form>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components:	{},
  methods: {},
}
</script>

<style scoped>

</style>