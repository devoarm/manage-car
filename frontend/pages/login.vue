<template>
  <div class="">
    <div class="container" style="margin-top: 100px">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-10">
          <div class="col-md-6 offset-md-3">
            <div class="card my-5">
              <div class="row">
                <form
                  class="card-body cardbody-color p-lg-5"
                  @submit.prevent="userLogin"
                >
                  <div class="text-center">
                    <img
                      src="icon/logo-bru.png"
                      class="img-thumbnail rounded-circle my-3"
                      width="150px"
                    />
                  </div>
                  <div class="text-center mb-4 text-dark">
                    ระบบจองยานพาหนะ มหาวิทยาลัยราชภัฏบุรีรัมย์
                  </div>

                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      v-model="email"
                      class="form-control form-control-user"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      v-model="password"
                      name="password"
                      class="form-control form-control-user"
                      placeholder="Password"
                      required
                    />
                    <i class="input-icon uil uil-lock-alt"></i>
                  </div>
                  <button
                    class="btn btn-primary btn-user btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                  <hr />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { email: this.email, password: this.password },
        })
        if (response.data.status === 200) {
          localStorage.setItem('userMe',JSON.stringify(response.data.user))
          this.$router.replace({ path: '/' })
        }
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
