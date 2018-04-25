<template>
  <div class="page-wrap">
    <div class="page-head">
      <router-link to="/" class="toReturn">
        <img src="/static/img/left.png" alt="">
      </router-link>
    </div>
    <div class="box-item" v-if="gameReportList==null">
      <p>暂无数据</p>
    </div>
    <div class="item-list" v-for="(item,index) in gameReportList" v-else>
      {{item}}
    </div>
    <div class="pagination-wrap" v-if="pages>=1">
      <pagination
        :page-index="currentPage"
        :pages="pages"
        :total="total"
        :page-size="pageSize"
        @change="pageChange">
      </pagination>
    </div>
  </div>
</template>

<script>
  import pagination from './pagination'

  export default {
    name: "pagination-index",
    data() {
      return {
        gameReportList: [],
        item: 1,

        currentPage: 1,
        pages: 0,
        pageSize: 5,
        total: 0,
      }
    },
    created() {
      this.getDataList();
    },
    methods: {
      getDataList() {
        //模拟数据
        this.gameReportList = [this.item++, this.item++, this.item++, this.item++, this.item++];
        console.log(this.gameReportList);
        this.pages = this.gameReportList.length / 5;
        this.total = this.total.length;
        var params = new URLSearchParams();
        var url = '';
        // this.$http
        //   .post(url, params)
        //   .then(res => {
        //     this.currentPage = 1;
        //     this.pages = 0;
        //     this.pageSize = 5;
        //     this.total = 0;
        //   })
        this.currentPage = 1;
        this.pages = 3;
        this.pageSize = 5;
        this.total = 15;
      },

      //从pageu组件传递过来的当前page
      pageChange(page) {
        this.currentPage = page;
        this.getDataList();
      },
    },
    components: {
      pagination
    }
  }
</script>

<style scoped lang="less">

</style>
