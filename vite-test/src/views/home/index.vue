<template>
    <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        style="max-width: 600px"
        label-width="120px"
        label-position="left"
    >
        <el-form-item label="姓名：" prop="name">
            <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="性别：" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择性别">
                <el-option label="男" value="0" />
                <el-option label="女" value="1" />
            </el-select>
        </el-form-item>
        <el-form-item label="年龄：" prop="age">
            <el-input v-model="form.age" />
        </el-form-item>
        <el-form-item label="手机号码：" prop="phone">
            <el-input v-model.number="form.phone" />
        </el-form-item>
        <el-form-item label="是否是本科学历" prop="isCollege">
            <el-switch v-model="form.isCollege" />
        </el-form-item>
        <el-form-item label="兴趣爱好" prop="favor">
            <el-checkbox-group v-model="form.favor">
                <el-checkbox value="0" name="favor"> 踢足球 </el-checkbox>
                <el-checkbox value="1" name="favor"> 打篮球 </el-checkbox>
                <el-checkbox value="2" name="favor"> 打羽毛球 </el-checkbox>
                <el-checkbox value="3" name="favor"> 看书 </el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)">提交</el-button>
            <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { request } from "../../utils/request";

const formRef = ref();
const form = ref({
    name: "222",
    sex: "",
    age: "",
    phone: "",
    isCollege: false,
    favor: []
});

const validateName = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("Please input the password"));
    }

    callback();
};

const rules = ref({
    name: [{ validator: validateName, trigger: "blur" }],
    age: [
        {
            required: true,
            message: "请输入年龄",
            trigger: "blur"
        }
    ],
    phone: [
        { required: true, message: "请输入手机号码" },
        {
            trigger: "blur",
            validator(rule, value, callback) {
                if (!/^1\d{10}/.test(value)) {
                    callback(new Error("请输入正确的手机号码"));
                }
                callback();
            }
        }
    ],
    sex: [{ required: true, message: "必须输入性别" }]
});
/**
 * 表单提交
 * @param formEl  表单实例对象
 */
const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validateField("sex"); // 单个校验
    console.log("submit!");
    // formEl.validate((valid) => {
    //     console.log("表单提交", valid, form.value);
    //     if (valid) {
    //         console.log("submit!");
    //     } else {
    //         console.log("error submit!");
    //     }
    // });
};
/**
 * 表单数据重置
 * @param formEl 表单实例对象
 */
const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
};
onMounted(() => {
    request({
        url: "https://uataudi-api.saic-audi.mobi/api-wap/audi-miniprogram/api/purple/v1/miniprogram/login",
        data: {
            appId: "wxe4e5f0932db701cf",
            appKey: "AUDIPURPLEMINI",
            code: "0d1WDL200UhcdT1uRL3003Yjqo1WDL2z",
            source: 2
        }
    }).then((rsp) => {
        console.log("日志输出", rsp);
    });
});
</script>
