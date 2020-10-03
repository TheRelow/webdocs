<template>
	<div class="about">
    <nav class="breadcrumbs breadcrumbs_docs">
      <div class="nav-wrapper">
        <div class="col s12">
          <router-link to="/" class="breadcrumb">home</router-link>
          <router-link to="/docs" class="breadcrumb">docs</router-link>
          <router-link to="/docs/new" class="breadcrumb">new</router-link>
        </div>
      </div>
    </nav>
    <h4>Создание раздела</h4>

    <form class="new-page" @submit.prevent="submitHandler">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">apps</i>
          <input id="name" v-model.trim="name" :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.maxLength)}" type="text">
          <label for="name">Название раздела</label>
          <small class="helper-text invalid red-text" v-if="$v.name.$dirty && !$v.name.required">У раздела должно быть название</small>
          <small class="helper-text invalid red-text" v-if="$v.name.$dirty && !$v.name.maxLength">Название раздела не должно быть таким большим</small>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">format_align_left</i>
          <input id="preview" v-model.trim="preview" :class="{invalid: ($v.preview.$dirty && !$v.preview.maxLength)}" type="text">
          <label for="preview">Короткое описание</label>
          <small class="helper-text invalid red-text" v-if="!$v.preview.maxLength">Колличество символов не должно превышать {{$v.preview.$params.maxLength.max}}. Сейчас введено {{preview.length}}</small>
        </div>

        <div class="switch col s12">
          Есть родительская категория
          <label>
            Off
            <input type="checkbox" v-model="checked">
            <span class="lever"></span>
            On
          </label>
        </div>

        <div class="input-field col s12" v-show="checked">
          <i class="material-icons prefix">format_align_left</i>
          <select id="parent" v-model.trim="parent">
            <option value="" disabled selected>Нет главной категории</option>
            <option value="js">Js</option>
            <option value="php">Php</option>
            <option value="vue">Vue</option>
          </select>
          <label>Choose your parent category</label>
        </div>

        <div class="input-field col s12">
          <div class="chips"></div>
        </div>

        <div class="col s12">
          <button class="btn waves-effect waves-light auth-submit" type="submit"><i class="material-icons right">add</i>Создать</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {required, maxLength} from 'vuelidate/lib/validators'

export default {
  name: 'New',
  data: () =>  ({
    checked: false,
    name: '',
    preview: '',
    parent: ''
  }),
  validations: {
    name: {required, maxLength: maxLength(20)},
    preview: {maxLength: maxLength(100)}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        name: this.name,
        preview: this.preview
      }
      console.log(formData);

      try {
        await this.$store.dispatch('setNewDoc', formData)
        this.$message('Раздел успешно создан')
        this.$store.commit('newDoc', formData)
      } catch (e) {
        console.log(e)
        this.$errorMsg(e.code)
      }
    }
  },
  mounted() {
    let chipElements = document.querySelectorAll('.chips');
    M.Chips.init(chipElements, {
      data: [{
        tag: 'Какие-то',
      }, {
        tag: 'теги',
      }],
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });
    let selectElements = document.querySelectorAll('select');
    M.FormSelect.init(selectElements);
  }
}
</script>