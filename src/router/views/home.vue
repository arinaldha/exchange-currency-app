<script>
// import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
var his = {to:'USD', val:'10.00'};

const data = {
  money : [
    {
      name : 'USD'
    },
    {
      name : 'CAD'
    },
    {
      name : 'IDR'
    },
    {
      name : 'GBP'
    },
    {
      name : 'CHF'
    },
    {
      name : 'SGD'
    },
    {
      name : 'INR'
    },
    {
      name : 'MYR'
    },
    {
      name : 'JPY'
    },
    {
      name : 'KRW'
    }
  ],
  his:his,
  res:[],
  listCurrency:[],
  listCountry:[],
  number:1
}

export default {
  page: {
    title: 'Home',
    // meta: [{ name: 'description', content: baseUrl }],
  },
  components: { Layout },
  data:function(params) {
    return data
  },
  mounted() {
    this.$store.dispatch('exchange/getCurrency').then((response) => {
      this.listCurrency = this.$store.state.exchange.list
    })
    this.$store.dispatch('exchange/getCountry').then((response) => {
      this.listCountry = this.$store.state.exchange.country
    })
  },
  created(){

  },
  methods:{
    submitexchange:function() {
      const selectedMoney = this.his.to
      const listCurrency = this.listCurrency
      const listCountry = this.listCountry

      const valConverted = parseFloat(this.his.val) * parseFloat(listCurrency[selectedMoney])

      if (this.his.val === '') {
        alert('Nilai Mata Uang Tidak Boleh Kosong')
      } else {
        const a = {
          id:this.number++,
          to:this.his.to,
          val:this.his.val,
          val_converted:valConverted,
          country : listCountry[selectedMoney],
          per_usd : listCurrency[selectedMoney]
        }
        this.res.push(a)
      }
    },
    deleteCurrency:function(id) {
      this.res = this.res.filter(item => item.id !== id)
    },
    numberWithCommas: function(x){
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}

</script>

<template>
  <Layout>
  <h2>Aplikasi <i>Foreign Exchange Currency</i></h2>
  <form style="margin-top:10px;" @submit.prevent="submitexchange">
    <select id="" v-model="his.to">
      <option v-for="(item, index) in listCurrency" :key="index" :value="index">{{index}}</option>
    </select>
    <input id="val-price" v-model="his.val" type="text" value="10.00">
    <input type="submit" value="Submit">
  </form>
  <h2>Hasil</h2>
  <div v-if="res.length > 0">
    <div v-for="(item, index) in res" id="card" :key="index" width="400px">
      <br>
      <span>{{item.to}} {{numberWithCommas(item.val_converted)}}</span> <br>
      <span>{{item.to}} - {{item.country}}</span><br>
      <span>1 USD = {{item.to}} {{item.per_usd}} </span> <br>
      <span><a  @click="deleteCurrency(item.id)">Delete</a></span>
    </div><br/>
  </div>
  <p v-else>Tidak ada data</p>
  </Layout>
</template>
