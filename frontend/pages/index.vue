<template lang="">
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <LayoutsNavBar />
      <!-- Begin Page Content -->
      <div class="container-fluid">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <div
          style="width: 800px; margin: auto; margin-top: 10px; font-size: 16px"
        >
          <div class="p-3 mb-2 bg-light text-dark" id="calendar"></div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- End of Main Content -->
    <LayoutsFooter />
  </div>
  <!-- End of Content Wrapper -->
</template>
<script>
export default {
  name: 'IndexPage',
  middleware: 'auth',
  layout: 'session',
  methods: {

  },
}
</script>
<style lang=""></style>
