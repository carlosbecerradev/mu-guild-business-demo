<template>
  <div class="flex justify-center items-center">
    <div
      @click="changePage(element.index)"
      class="mx-1 px-2 py-1 rounded text-sm bg-white shadow-md cursor-pointer"
      :class="element.active ? 'bg-indigo-600 text-white' : 'bg-white text-black'"
      v-for="element in paginator"
      :key="element.index"
    >
      {{ element.page }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageable: {
        elements: [],
        totalPages: 0,
        elementsPerPage: 0,
        currentPage: 0,
      },
      paginator: [],
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    elementsPerPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    createPageable(list, indexPage = 0, elementsPerPage) {
      let index = 0;
      let totalElements = list.length;
      // find total pages
      let totalPages = Math.floor(totalElements / elementsPerPage);
      if (totalElements % elementsPerPage > 0) {
        totalPages++;
      }

      index = elementsPerPage * indexPage;

      let elements = list.slice(index, index + elementsPerPage);
      this.pageable.elements = elements;
      this.pageable.totalPages = totalPages;
      this.pageable.elementsPerPage = elementsPerPage;
      this.pageable.currentPage = indexPage;
    },
    createPaginator(pageable) {
      let paginator = [];
      let desde, hasta;

      if (pageable.totalPages <= pageable.elementsPerPage) {
        desde = 1;
        hasta = pageable.totalPages;
      } else {
        if (pageable.currentPage <= Math.floor(pageable.elementsPerPage / 2)) {
          desde = 1;
          hasta = pageable.elementsPerPage;
        } else if (
          pageable.currentPage >=
          pageable.totalPages - Math.floor(pageable.elementsPerPage / 2)
        ) {
          desde = pageable.totalPages - pageable.elementsPerPage + 1;
          hasta = pageable.elementsPerPage;
        } else {
          desde =
            pageable.currentPage - Math.floor(pageable.elementsPerPage / 2);
          hasta = pageable.elementsPerPage;
        }
      }

      for (let i = 0; i < hasta; i++) {
        paginator.push({
          index: desde + i - 1,
          page: desde + i,
          active: pageable.currentPage == desde + i - 1,
        });
      }

      if (pageable.totalPages > pageable.elementsPerPage && pageable.totalPages != 1) {
        if (paginator.some((object) => object.index == 0)) {
          paginator.push({
            index: pageable.totalPages - 1,
            page: pageable.totalPages,
            active: false,
          });
        } else if (
          paginator.some((object) => object.index == pageable.totalPages - 1)
        ) {
          paginator.unshift({ index: 0, page: 1, active: false });
        } else {
          paginator.unshift({ index: 0, page: 1, active: false });
          paginator.push({
            index: pageable.totalPages - 1,
            page: pageable.totalPages,
            active: false,
          });
        }
      }

      this.paginator = paginator;
    },
    changePage(indexPage) {
      this.createPageable(
        this.list,
        indexPage,
        this.elementsPerPage
      );
      this.createPaginator(this.pageable);
      this.$emit("pageElements", this.pageable.elements);
    },
  },
  created() {
    this.createPageable(this.list, 0, this.elementsPerPage);
    this.createPaginator(this.pageable);
    this.changePage(0)
    // console.log(this.pageable)
    // console.log(this.paginator)
  },
};
</script>
