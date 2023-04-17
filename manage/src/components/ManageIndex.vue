<template>
    <div class="hd-wrap">

        <div class="hd">
            <i class="el-icon-s-unfold" @click="handleClose"></i>
            <img src="" alt="LOGO">
            <span>管理系统</span>
        </div>
        <el-drawer title="我是标题" :visible.sync="drawer" direction="ltr">
            <span @click='handleClose'>我来啦!</span>
        </el-drawer>
    </div>
</template>

<script>

export default {
    data() {
        return {
            drawer: false

        }
    },
    methods: {
        handleClose(done) {
            this.drawer = !this.drawer
        }
    }
}
</script>

<style lang='scss'>
.hd-wrap {
    padding: 0;
}

.hd {
    background-image: linear-gradient(315deg, #00b6ff, #006bff);
    color: #fff;
    font-size: large;
    font-weight: bold;
    padding: 10px;
    text-align: left;

    img {
        margin: 10px;
    }
}
</style>