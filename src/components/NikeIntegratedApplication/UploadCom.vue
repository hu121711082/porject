<template>
    <div class="box">
        <div class="upload">
          <Upload
            multiple
            :before-upload="handleUpload"
            :action = action
            :format="['xls','xlsx']">
            <Button icon="ios-cloud-upload-outline">浏览...</Button>
          </Upload>
          <Button type="success" style="margin-left: 20px; width: 100px;" @click="upload">提交</Button>
        </div>
        <div class="info">
            <div  v-for="(item, index) in file" :key="index">{{item.name}} <a @click="delectFile(index)">×</a></div>
        </div>
    </div>
</template>

<script>
import {upload} from '@/api/NikeIntegratedApplication/Upload.js'
export default {
    props: {
        msg: {
            type: Number
        },
        file: {
          type: Array
        }
    },
  data() {
    return{
      action: 'http://192.168.10.166:8080/upload',
    }
  },
  methods: {
    handleUpload(file) {
      // 选择文件后 这里判断文件类型 保存文件 自定义一个keyid 值 方便后面删除操作
      let keyID = Math.random().toString().substr(2);
      file['keyID'] = keyID;
      // 保存文件到总展示文件数据里
    //   console.log(file.name.indexOf("."))
      var FileExt=file.name.replace(/.+\./,"");
      if(FileExt == "xlsx" || FileExt == "xls") {
        if(this.file.length < this.msg) {
        this.file.push(file);
        
        }else{
            this.$Message.error('文件选择过多！请提交之后在上传文件');
        }
      }else {
         this.$Message.error('上传类型只能是xls,xlsx');
      }
      // 返回 falsa 停止自动上传 我们需要手动上传
      return false;
    },
    delectFile(index){
      this.file.splice(index,1)
    },
    upload () {
        if(this.file.length == 0){
            this.$Message.error('上传文件不能为空');
            return;
        }else {
            this.$emit("sendLoading",true)
            
            let formData = new FormData();

            for(let i = 0; i < this.file.length; i++) {
                formData.append('file', this.file[i]);
            }

            upload(formData).then(res => {
                // console.log(res.data.status)
                if(res.data.status == "1") {
                    this.$emit("sendLoading",false)
                    this.$Message.success('上传成功')
                    this.file = []
                }else if(res.data.status == "0") {
                    this.$Message.error('上传失败')
                    this.$emit("sendLoading",false)
                    this.file = []
                }else {
                  console.log('处理异常')
                  this.$emit("abnormal",true)
                }
            }).catch(error => {
              alert("请求超时！")
              this.$emit("sendLoading",false)
            })
        }

       
    }
  }
}
</script>

<style scoped>
.upload {
  display: flex;
  /* justify-content: space-around; */
}
.info {
    margin: 0 10px;
}
.info div {
    line-height: 25px;
    height: 25px;
}
.info div a {
    color: rgb(73, 70, 70);
    font-size: 16px;
    margin-left: 30px;
}
</style>