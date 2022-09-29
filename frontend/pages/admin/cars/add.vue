<template lang="">
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <LayoutsNavBar />
      <!-- Begin Page Content -->
      <div class="container-fluid">
        <h1 class="h3 mb-0 text-gray-800">เพิ่มรถ</h1>
        <div class="card mt-3">
          <div class="card-body">
            <form @submit="handleSubmit">
              <div class="row">
                <div class="col-md-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">อัพโหลดรูปภาพ</span>
                    </div>
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="inputGroupFile01">
                      <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="staticEmail" class="col-sm-2 col-form-label"
                      >ยี่ห้อรถ</label
                    >
                    <div class="col-sm-10">
                      <input
                        required
                        type="text"
                        name="rank_name"
                        v-model="form.car_brand"
                        class="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="staticEmail" class="col-sm-2 col-form-label"
                      >รุ่นรถ</label
                    >
                    <div class="col-sm-10">
                      <input
                        required
                        type="text"
                        name="rank_name"
                        v-model="form.car_model"
                        class="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="staticEmail" class="col-sm-3 col-form-label"
                      >เลขทะเบียน</label
                    >
                    <div class="col-sm-10">
                      <input
                        required
                        type="text"
                        name="rank_name"
                        v-model="form.car_license"
                        class="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="staticEmail" class="col-sm-3 col-form-label"
                      >จำนวนที่นั่ง</label
                    >
                    <div class="col-sm-10">
                      <input
                        required
                        type="number"
                        name="rank_name"
                        v-model="form.car_max"
                        class="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="staticEmail" class="col-sm-3 col-form-label"
                      >รายละเอียด</label
                    >
                    <div class="col-sm-10">
                      <textarea class="form-control" v-model="form.detail" rows="3"></textarea>

                    </div>
                  </div>
                </div>

              </div>
              <hr></hr>
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit">เพิ่ม</button>
                <button class="btn">ยกเลิก</button>
              </div>
            </form>
          </div>
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
  name: 'CarAddPage',
  middleware: 'auth',
  layout: 'session',
  data() {
    return {
      form: {
        car_image: null,
        car_model: '',
        car_brand: '',
        car_license: '',
        car_max: '',
        car_detail: '',
      },
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      const ip = await this.$axios.$post('api/rank', this.form)
      console.log(ip)
      if (ip.status === 200) {
        await this.$swal({
          type: 'success',
          title: 'บันทึกสำเร็จ',
          showConfirmButton: false,
          timer: 1000,
        })
        this.$router.replace({ path: '/admin/rank' })
      } else {
        this.$swal({
          type: 'error',
          title: 'เพิ่มไม่สำเร็จ',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    },
  },
}
</script>
<style lang=""></style>
