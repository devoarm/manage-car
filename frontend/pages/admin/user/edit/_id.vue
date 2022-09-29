<template lang="">
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <LayoutsNavBar />
      <!-- Begin Page Content -->
      <div class="container-fluid">
        <h1 class="h3 mb-0 text-gray-800">แก้ไขบัญชีผู้ใช้</h1>
        <div class="card mt-3">
          <div class="card-body">
            <form>
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
                <button class="btn btn-success mr-1" type="submit">
                  อัพเดท
                </button>
                <button class="btn btn-primary">เปลี่ยนรหัสผ่าน</button>
                <nuxt-link to="/admin/user" class="btn">ยกเลิก</nuxt-link>
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
  name: 'UserEditPage',
  middleware: 'auth',
  layout: 'session',
  data() {
    return {
      form: {
        email: '',
        firstname: '',
        lastname: '',
        user_level: 1,
        role: 'user',
      },
    }
  },
  mounted() {
    this.fetchUser()
  },
  methods: {
    async fetchUser() {
      const ip = await this.$axios.get(`api/auth/user/${this.$route.params.id}`)
      this.form = ip.data.msg
      console.log(this.form)
    },
  },
}
</script>
<style lang=""></style>
