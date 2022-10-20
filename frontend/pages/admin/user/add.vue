<template lang="">
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <LayoutsNavBar />
      <!-- Begin Page Content -->
      <div class="container-fluid">
        <h1 class="h3 mb-0 text-gray-800">เพิ่มบัญชีผู้ใช้</h1>
        <div class="card mt-3">
          <div class="card-body">
            <form @submit="handleSubmit">
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >email</label
                >
                <div class="col-sm-10">
                  <input
                    required
                    type="email"
                    name="email"
                    v-model="form.email"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Password</label
                >
                <div class="col-sm-10">
                  <input
                    required
                    v-model="form.password"
                    name="password"
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >ชื่อจริง</label
                >
                <div class="col-sm-10">
                  <input
                    required
                    type="text"
                    name="firstname"
                    v-model="form.firstname"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >นามสกุล</label
                >
                <div class="col-sm-10">
                  <input
                    required
                    type="text"
                    name="lastname"
                    v-model="form.lastname"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >ลำดับผู้ใช้</label
                >
                <div class="col-sm-10">
                  <input
                    required
                    v-model="form.user_level"
                    name="user_level"
                    type="number"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >สิทธิการใช้งาน</label
                >
                <div class="col-sm-10">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>user</option>
                    <option>admin</option>
                  </select>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit">
                  เพิ่มบัญชีผู้ใช้
                </button>
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
  name: 'UserAddPage',
  middleware: 'auth',
  layout: 'session',
  data() {
    return {
      form: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        user_level: 1,
        role: 'user',
      },
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      const ip = await this.$axios.$post('api/auth/register', this.form)
      console.log(ip)
      if (ip.msg === 'success') {
        await this.$swal({
          type: 'success',
          title: 'บันทึกสำเร็จ',
          showConfirmButton: false,
          timer: 1000,
        })
        this.$router.replace({ path: '/admin/user' })
      } else if (ip.msg === 'hasData') {
        this.$swal({
          type: 'info',
          title: 'email นี้ใช้งานแล้ว',
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        this.$swal({
          type: 'error',
          title: 'บันทึกไม่สำเร็จ',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    },
  },
}
</script>
<style lang=""></style>
