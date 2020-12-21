<template>
  <div v-if="totalPages() > 0" class="flex justify-center items-center">
    <div
      v-if="showPreviousLink()"
      @click="updatePage(currentPage - 1)"
      class="mx-1 px-2 py-1 rounded text-sm bg-white hover:bg-indigo-600 hover:text-white shadow-md cursor-pointer"
    >
      <span class="sr-only">previous</span>
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
    <div
      @click="updatePage(element.index)"
      class="mx-1 px-2 py-1 rounded text-sm bg-white shadow-md cursor-pointer"
      :class="
        element.index == currentPage
          ? 'bg-indigo-600 text-white'
          : 'bg-white text-black'
      "
      v-for="element in createPaginator()"
      :key="element.index"
    >
      {{ element.page }}
    </div>
    <div
      v-if="showNextLink()"
      @click="updatePage(currentPage + 1)"
      class="mx-1 px-2 py-1 rounded text-sm bg-white hover:bg-indigo-600 hover:text-white shadow-md cursor-pointer"
    >
      <span class="sr-only">next</span>
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "pagination",
  props: {
    totalElements: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    elementsPerPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
    },
    totalPages() {
      return Math.ceil(this.totalElements / this.elementsPerPage);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == this.totalPages() - 1 ? false : true;
    },
    createPaginator() {
      let paginator = [];
      let desde, hasta;

      if (this.totalPages() <= this.elementsPerPage) {
        desde = 1;
        hasta = this.totalPages();
      } else {
        if (this.currentPage <= Math.floor(this.elementsPerPage / 2)) {
          desde = 1;
          hasta = this.elementsPerPage;
        } else if (
          this.currentPage >=
          this.totalPages() - Math.floor(this.elementsPerPage / 2)
        ) {
          desde = this.totalPages() - this.elementsPerPage + 1;
          hasta = this.elementsPerPage;
        } else {
          desde = this.currentPage - Math.floor(this.elementsPerPage / 2);
          hasta = this.elementsPerPage;
        }
      }

      for (let i = 0; i < hasta; i++) {
        paginator.push({
          index: desde + i - 1,
          page: desde + i,
        });
      }

      if (this.totalPages() > this.elementsPerPage && this.totalPages() != 1) {
        if (paginator.some((object) => object.index == 0)) {
          paginator.push({
            index: this.totalPages() - 1,
            page: this.totalPages(),
          });
        } else if (
          paginator.some((object) => object.index == this.totalPages() - 1)
        ) {
          paginator.unshift({ index: 0, page: 1 });
        } else {
          paginator.unshift({ index: 0, page: 1 });
          paginator.push({
            index: this.totalPages() - 1,
            page: this.totalPages(),
          });
        }
      }

      return paginator;
    },
  },
};
</script>
