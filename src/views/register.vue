<template>
  <div class="container login">
    <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Регистрация</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
            class="helper-text invalid"
            v-if="$v.email.$dirty && !$v.email.required"
        >Поле Email не должно быть пустым</small>
        <small
            class="helper-text invalid"
            v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корретный Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </small>
        <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}
        </small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
        >
        <label for="password">Имя</label>
        <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите имя
        </small>
      </div>
    </div>
    <div class="card-action">
      <div class="center">
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти</router-link>
      </p>
    </div>
  </form>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
// import messages from '@/utils/messages'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
    name: ''
  }),
  validations: {
    name: {required},
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  mounted() {},
  methods: {
    async submitHandler() {
      console.log(this.$v)
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      console.log(formData);
      try {
        await this.$store.dispatch('register', formData)
        await this.$router.push('/')
        // eslint-disable-next-line no-empty
      } catch (e) {
        console.log(e)
        this.$errorMsg(e.code)
      }
    }
  }
}
</script>
