export const FormMixins = {
  data () {
    return {
      // Rules
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => /[A-Za-z]+/.test(v) || 'Must Be Letters Only'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phoneRules: [
        v => !!v || 'Phone is required',
        v => /.+@.+\..+/.test(v) || 'Phone must be valid'
      ]

    }
  },
  methods: {
    submitForm () {
      this.validate()
    },
    validate () {
      this.$refs.teacherFormRef.validate()
    },
    reset () {
      this.resetValidation()
      this.$refs.teacherFormRef.reset()
    },
    resetValidation () {
      this.$refs.teacherFormRef.resetValidation()
    },
    deleteItem () {
      console.log('deleteItem clicked')
      console.log('this.selected', this.selected)
    }

  },
  mounted () {

  },
  created () {

  }
}
