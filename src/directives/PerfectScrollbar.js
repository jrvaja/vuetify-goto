import Vue from 'vue'
import PerfectScrollbar from 'perfect-scrollbar'

function scollbar (el, args) {
  const ps = new PerfectScrollbar(el, args)
  return ps
}

export default Vue.directive('vuse-scrollbar', {
  bind (el, binding, vnode) {
    el.classList.add('scroll-container')
    const args = {
      scrollingThreshold: 1000,
      suppressScrollX: true,
      suppressScrollY: false
    }
    if (binding.arg === 'x') {
      args.suppressScrollX = false
    }
    if (binding.arg === 'y') {
      args.suppressScrollY = true
    }
    const ps = scollbar(el, args)
    vnode.context.ps = ps
  },
  update (el, binding, vnode, oldVnode) {
    // oldVnode.context.ps.update()
  }
})
