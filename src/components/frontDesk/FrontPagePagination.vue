<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end m-0">
      <li class="page-item " :class="{ 'disabled': pages.current_page === 1 }">
        <a class="page-link bg-dark text-light opacity-50  border-0" :class="{ 'opacity-25': pages.current_page === 1 }"
          href="#" aria-label="Previous" @click.prevent="emitPages(pages.current_page - 1)">
          <!-- <span aria-hidden="true">&laquo;</span> -->
          <i class="bi bi-caret-left-fill"></i>
        </a>
      </li>
      <!-- 抓取總頁數 使用v-for -->
      <li class="page-item" v-for="(item, ind) in pages.total_pages" :key="ind"
        :class="{ 'active': item === pages.current_page }">
        <!-- 這裡使用 v-if v-else 來判斷 如果是當前的頁面就不加上 【點擊事件】-->
        <span class="page-link bg-dark text-light  border-0 " v-if="item === pages.current_page">{{ item }}</span>
        <!-- 相反則是使用 【點擊事件】 -->
        <a class="page-link bg-dark text-light opacity-50  border-0" href="#" v-else @click.prevent="emitPages(item)">{{ item }}</a>
      </li>
      <li class="page-item" :class="{ 'disabled': pages.current_page === pages.total_pages }">
        <a class="page-link bg-dark text-light opacity-50  border-0" :class="{ 'opacity-25': pages.current_page === pages.total_pages }"
          href="#" aria-label="Next" @click.prevent="emitPages(pages.current_page + 1)">
          <!-- <span aria-hidden="true">&raquo;</span> -->
          <i class="bi bi-caret-right-fill"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style>
</style>
<script>
export default {
  props: ['pages'],
  methods: {
    emitPages (item) {
      this.$emit('emit-pages', item)
    }
  }
}
</script>
