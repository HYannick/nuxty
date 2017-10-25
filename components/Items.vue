<template>
    <div>
        <ul class="news-list">
            <li class="list-item" v-for="item in items" :key="item.id">
                <div class="score">
                    <span>{{item.score}}</span>
                </div>
                <div class="content">
                    <h3><a :href="`${item.url}`" target="_blank">{{item.title}}</a></h3>
                    <div class="item-content">
                        <template v-if="item.descendants">
                            <div class="comments">
                                <p>{{item.descendants}} comments</p>
                            </div>
                        </template>
                        <div class="author">
                            <p>By <nuxt-link :to="`/user/${item.by}`">{{item.by}}</nuxt-link> | {{item.time | timeSince}} ago</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <el-button>Default</el-button>
    </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState(['items'])
  }
</script>

<style scoped lang="scss">

    .news-list{
        padding: 20px;
        display: table;
    }
    .item-content {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        div {
            flex: 1;
            &.author {
                text-align: right;
            }
        }
    }
    .list-item {
        list-style: none;
        padding: 20px 0;
        border-bottom: 1px dashed #ff72e9;
        display: flex;
        align-items: center;
        .score{
            font-weight: bold;
            font-size: 20px;
            margin-right: 20px;
            text-align: center;
            flex: 1;
            span {
                border-radius: 10%;
                border: 2px solid #ff72e9;
                width: 70px;
                height: 70px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

        }
        .content {
            flex: 8;
        }
        h3 {
            font-weight: lighter;
            a { color: inherit}
        }
    }
</style>