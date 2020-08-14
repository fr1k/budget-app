import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
// import ElementUI from 'element-ui';
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Dialog,
  ButtonGroup,
} from 'element-ui';

const elements = [
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Dialog,
  ButtonGroup,
];
// Vue.use(ElementUI, { locale });
locale.use(lang);

elements.forEach((El) => {
  Vue.use(El, { locale });
});
