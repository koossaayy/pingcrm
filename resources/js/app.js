import '../css/app.css'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import i18n from './i18n-setup';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  title: title => title ? `${title} - Ping CRM` : 'Ping CRM',
  setup({ el, App, props, plugin }) {
    i18n.global.locale.value = props.initialPage.props.locale ?? 'en';
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(i18n).mount(el)
  },
})
