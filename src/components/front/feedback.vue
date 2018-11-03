<template>
    <el-card shadow="hover" class="card" v-loading="isSubmiting" id="feedbackBox" >
        <div slot="header">
            <span>留言板</span>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="标题" prop="title">
                <el-input v-model="ruleForm.title" id="feedbackTitle"></el-input>
            </el-form-item>
            <el-form-item label="类型" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择留言类型" id="feedbackType">
                <el-option label="业务咨询" value="1"></el-option>
                <el-option label="意见反馈" value="2"></el-option>
                <el-option label="其它" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <el-input type="textarea" :rows="3" v-model="ruleForm.content" id="feedbackContent"></el-input>
            </el-form-item>
            <el-form-item label="联系人电话" prop="submitPhoneNumber">
                <el-input v-model="ruleForm.submitPhoneNumber" id="feedbackSubmitPhoneNumber"></el-input>
            </el-form-item>
            <el-form-item label="联系人邮箱" prop="submitEmail">
                <el-input v-model="ruleForm.submitEmail" id="feedbackSubmitEmail"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" id="btnSubmitFeedback" @click="submitForm('ruleForm')">提交</el-button>
                <el-button id="btnResetFeedback" @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
    </el-card>
</template>
<script>
import { post } from "../../util/apiUtil.js";
export default {
    name: "indexNews",
    data() {
      var validatePhone = (rule, value, callback) => {
        if (value) {
          var tester = new RegExp(/^1[3|4|5|7|8]\d{9}$/);
          if(!tester.test(value)){
            callback(new Error("请输入正确的手机号码"));
          }
        }

         callback();
      };

      var validateEmail = (rule, value, callback) => {
        if (value) {
          var tester = new RegExp(/^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/);
          if(!tester.test(value)){
            callback(new Error("请输入正确的EMail地址"));
          }
        }

         callback();
      };

        return {
          isSubmiting:false,
        ruleForm: {
          title: '',
          type: '',
          content: ''
        },
        rules: {
          title: [
            { required: true, message: '请输入留言标题', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择留言类型', trigger: 'change' }
          ],
          content: [
            { required: true, message: '请填写留言内容', trigger: 'blur' },
             { min: 1, max: 1000, message: '长度在 1 到 1000 个字符', trigger: 'blur' }
          ],
           submitEmail: [
            { validator: validateEmail, trigger: 'blur' }
          ],
           submitPhoneNumber: [
            { validator: validatePhone, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.isSubmiting = true;
              post("feedback/add", {
                title:this.ruleForm.title,
                content:this.ruleForm.content,
                type:this.ruleForm.type,
                submitPhoneNumber:this.ruleForm.submitPhoneNumber,
                submitEmail:this.ruleForm.submitEmail
              }).then(result => {
                if(result && result.status === 1){
                  this.$message({
                    message:result.messages,
                    type: 'success'
                  });

                  this.resetForm("ruleForm");
                }else{
                  this.$message({
                    message:result.messages,
                    type: 'error'
                  });
                }

                this.isSubmiting = false;
              })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>
<style lang="scss" scoped>
.el-select{
    width:100%;
}
</style>
