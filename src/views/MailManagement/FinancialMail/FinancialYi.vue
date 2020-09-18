<template>
  <div class="app">
    <h2>财务邮件处理一</h2>
    <!-- 文件上传  -->
    <Upload action="http://192.168.10.166:8080/upload" multiple>
        <Button icon="ios-cloud-upload-outline">导入</Button>
    </Upload>

     <Button class="export" @click="onExport">下载</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exportLoading: false
    };
  },
  methods: {
    onExport() { 
      var url = "http://192.168.10.166:8080/download"
      window.open(url)

    }
  }
}
</script>

<style scoped>

</style>