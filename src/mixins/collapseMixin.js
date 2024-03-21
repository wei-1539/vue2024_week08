// bootstrap收合  function
import BsCollapse from 'bootstrap/js/dist/collapse'
export default {
  methods: {
    bsToggle  () {
      this.collapse.toggle()
    }
  },
  mounted () {
    this.collapse = new BsCollapse(this.$refs.navbar, { toggle: false })
  }
}
