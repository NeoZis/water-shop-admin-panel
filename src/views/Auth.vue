<template>
  <div id="auth">
    <Logo/>
    <p class="title">{{ formTitle }}</p>
    <div class="fields">
      <el-form
          :model="form"
          :rules="rules"
          ref="validation-auth"
          label-position="top"
          class="auth-item"
      >
        <el-form-item label="Email" label-width="120px" prop="email">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="mode === 'signin'" label="Password" label-width="120px" prop="password">
          <el-input v-model="form.password" autocomplete="off" show-password></el-input>
        </el-form-item>
      </el-form>
      <div class="auth-item">
        <el-button @click="validateFunc('validation-auth', mode === 'signin' ? logIn : forgotPassword)"
                   :loading="loading"
                   class="button-auth"
                   type="primary">{{ buttonName }}
        </el-button>
      </div>
    </div>
    <div class="links">
      <router-link to="/auth/forgot" v-show="mode==='signin'">Forgot your password?</router-link>
      <p v-show="mode==='forgot'">Back to
        <router-link to="/auth/signin">log in page</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/service/api";
import rules from "@/helpers/validationRules";
import {mapActions} from 'vuex'

const Logo = () => import('@/components/helpers/Logo')

export default {
  name: "Auth",
  components: {Logo},
  data() {
    return {
      rules,
      bgButton: '#005CB9',
      loading: false,
      loadingForgot: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    mode() {
      return this.$route.params.mode
    },
    formTitle() {
      return this.mode === 'signin' ? 'Log In' : 'Forgot password'
    },
    buttonName() {
      return this.mode === 'signin' ? 'Log In' : 'Reset password'
    }
  },
  methods: {
    ...mapActions(['setErrorMessage']),
    validateFunc(ref, func) {
      let vm = this
      this.$refs[ref].validate(async (valid) => {
        if (valid) {
          await func()
        } else {
          await vm.setErrorMessage('Error with validation')
          return false;
        }
      });
    },
    async logIn() {
      try {
        this.loading = true
        const request = new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
        await request
        let {data: {token}} = await api.GET('test-json/auth.json')
        localStorage.setItem('token', token)
        this.$store.commit('setToken', token)
        this.$router.push('/')
      } catch (e) {
        await this.setErrorMessage(e?.response?.data?.title || 'Error with authorization')
      } finally {
        this.loading = false
      }
    },
    async forgotPassword() {
      this.loadingForgot = true
      this.loadingForgot = false
    }
  }
}
</script>

<style>

</style>
