<template>
  <div>
    <el-col :span="4">
      <el-menu class="el-menu-vertical-demo">
        <el-menu-item  index="1">
          <nuxt-link to="/" tag="a">
            <i class="el-icon-menu"></i>Home
          </nuxt-link>
        </el-menu-item>
        <el-menu-item  index="2">
          <nuxt-link to="/new" tag="a">
            <i class="el-icon-menu"></i>News
          </nuxt-link>
        </el-menu-item>
        <el-menu-item  index="3">
          <nuxt-link to="/show" tag="a">
            <i class="el-icon-menu"></i>Shows
          </nuxt-link>
        </el-menu-item>
        <el-menu-item  index="4">
          <nuxt-link to="/jobs" tag="a">
            <i class="el-icon-menu"></i>Jobs
          </nuxt-link>
        </el-menu-item>
        <el-menu-item  index="5">
          <nuxt-link to="/ask" tag="a">
            <i class="el-icon-menu"></i>Ask
          </nuxt-link>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <nuxt/>
    </el-col>

  </div>
</template>

<style lang="scss">
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
  .el-menu {
    background: none;
  }
  .el-menu-item {
    background: none;
    padding: 0;
    &:hover {
      background: none;
    }
    a{
      color: #fe0560;
      transition: 0.3s;
      display: block;
      &.nuxt-link-exact-active {
        border-left: 4px solid #fe0560;
        padding-left: 30px;
        font-weight: bold;
      }
    }
  }
</style>
