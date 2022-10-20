<template lang="">
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <LayoutsNavBar />
      <!-- Begin Page Content -->
      <div class="container-fluid">
        <h1 class="h3 mb-0 text-gray-800">จองรถ</h1>
        <div class="card mt-3">
          <div class="card-body">
            <form @submit="handleSubmit">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-dark">เลือกรถ</label>
                    <select class="form-control" v-model="form.car_id">
                      <option v-for="car in cars" :value="car.car_id">{{car.car_brand}} รุ่น : {{car.car_model}} ทะเบียน : {{car.car_license}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-dark">วัตถุประสงค์</label>
                    <input v-model="form.reserve_objective" name="reserve_objective" type="text" class="form-control" placeholder="กรุณากรอก :"></input>
                  </div>                  
                </div>                
                <div class="col-md-6">
                  <ThailandAutoComplete
                    v-model="district"
                    type="district"
                    @select="select"
                    label="ตำบล"
                    color="#5DADE2"                    
                    placeholder="ตำบล..."/>
                </div>                  
                <div class="col-md-6"><ThailandAutoComplete v-model="amphoe" type="amphoe" @select="select" color="#5DADE2" label="อำเภอ" placeholder="อำเภอ..."/></div>
                <div class="col-md-6"><ThailandAutoComplete v-model="province" type="province" @select="select" label="จังหวัด" color="#5DADE2" placeholder="จังหวัด..."/></div>
                <div class="col-md-6"><ThailandAutoComplete v-model="zipcode" type="zipcode" @select="select" label="รหัสไปรษณีย์" color="#5DADE2" placeholder="รหัสไปรษณีย์..."/>        </div>                                                                       
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-dark">ระยะทาง</label>
                    <input type="text" v-model="form.reserve_length" name="reserve_length" class="form-control" placeholder="กรุณากรอก :" aria-label="Username" aria-describedby="basic-addon1"></input>
                  </div>                  
                </div>                     
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-dark">งบค่าเชื้อเพลิง</label>
                    <div class="form-check">
                      <input class="form-check-input" v-model="form.reserve_budget_type" type="radio" name="exampleRadios" id="exampleRadios1" value="งบประมาณแผ่นดิน" checked>
                      <label class="form-check-label" for="exampleRadios1">
                        งบประมาณแผ่นดิน
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" v-model="form.reserve_budget_type" type="radio" name="exampleRadios" id="exampleRadios1" value="งบรายได้" checked>
                      <label class="form-check-label" for="exampleRadios1">
                        งบรายได้
                      </label>
                    </div>                
                    <div class="form-check">
                      <input class="form-check-input" v-model="form.reserve_budget_type" type="radio" name="exampleRadios" id="exampleRadios1" value="งบอื่นๆ" checked>
                      <label class="form-check-label" for="exampleRadios1">
                        งบอื่นๆ
                      </label>
                    </div>
                  </div>                  
                </div>   
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-dark">บุคลากรที่เดินทางจำนวน</label>
                    <input type="text" class="form-control" v-model="form.reserve_personnel_amount" name="reserve_personnel_amount" placeholder="กรุณากรอก :" aria-label="Username" aria-describedby="basic-addon1"></input>
                  </div>                  
                </div> 
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-dark">นักศึกษาที่เดินทางจำนวน</label>
                    <input type="text" class="form-control" v-model="form.reserve_student_amount" name="reserve_student_amount" placeholder="กรุณากรอก :" aria-label="Username" aria-describedby="basic-addon1"></input>
                  </div>                  
                </div> 
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-dark">วันเวลาที่เดินทางไป</label>                    
                    <date-picker v-model="form.reserve_start_date_time" type="datetime"></date-picker>

                  </div>                  
                </div> 
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-dark">วันเวลาที่เดินทางกลับ</label>                    
                    <date-picker v-model="form.reserve_end_date_time" type="datetime"></date-picker>
                  </div>                  
                </div>               
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="text-dark">ผู้รับผิดชอบในการควบคุมการใช้รถยนต์</label>
                    <select class="form-control" v-model="form.chauffeur_id">
                      <option v-for="chauffeur in chauffeurs" :value="chauffeur.chauffeur_id">{{chauffeur.chauffeur_fname}} {{chauffeur.chauffeur_lname}}</option>
                    </select>
                  </div>
                </div>
              </div>       
              <div class="text-center" type="submit">
                <button class="btn btn-primary">บันทึก</button>
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
import ThailandAutoComplete from 'vue-thailand-address-autocomplete'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "IndexPage",
  middleware: "auth",
  layout: "session",
  components: {
    ThailandAutoComplete,
    DatePicker
  },  
  data() {
    return {
      cars:[],
      chauffeurs:[],
      form:{},
      district: '',
      amphoe: '',
      province: '',
      zipcode: ''
    }
  },
  mounted() {
    this.fetchCar()
    this.fetchChauffeur()
  },
  methods: {
    select (address) {
      this.district = address.district
      this.amphoe = address.amphoe
      this.province = address.province
      this.zipcode = address.zipcode
    },
    async fetchCar() {
      const ip = await this.$axios.get("api/car")
      this.cars = ip.data.result      
    },
    async fetchChauffeur(){
      const ip = await this.$axios.get("api/chauffeur")
      this.chauffeurs = ip.data.result
    },
    async handleSubmit(e){
      e.preventDefault()
      try {
        this.form.reserve_full_address = `ต.${this.district} อ.${this.amphoe} จ.${this.province} รหัสไปรษณีย์ ${this.zipcode}`
        const ip = await this.$axios.$post('api/reserve', this.form)
        if (ip.status === 200) {
          await this.$swal({
            type: 'success',
            title: 'บันทึกสำเร็จ',
            showConfirmButton: false,
            timer: 1000,
          })
          this.$router.replace({ path: '/reserve' })
        } else {
          this.$swal({
            type: 'error',
            title: 'เพิ่มไม่สำเร็จ',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      } catch (error) {
        this.$swal({
          type: 'error',
          title: 'เพิ่มไม่สำเร็จ',
          showConfirmButton: false,
          timer: 1500,
        })
      }
      
    }
  },
}
</script>
<style lang=""></style>
