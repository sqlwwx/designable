import { createSchemaField } from '@formily-x/react'
import {
  FormItem,
  Input,
  NumberPicker,
  DatePicker,
  TimePicker,
  Select,
  Radio,
  Switch,
  Space,
  ArrayItems,
  ArrayTable,
  FormCollapse,
  FormGrid,
  FormLayout,
  FormTab,
} from '@formily-x/antd'
import { Slider } from 'antd'
import {
  SizeInput,
  ColorInput,
  ImageInput,
  BackgroundImageInput,
  PositionInput,
  CornerInput,
  MonacoInput,
  ValueInput,
  BoxStyleSetter,
  BorderStyleSetter,
  BorderRadiusStyleSetter,
  BackgroundStyleSetter,
  BoxShadowStyleSetter,
  FontStyleSetter,
  DisplayStyleSetter,
  FlexStyleSetter,
  DrawerSetter,
  CollapseItem,
} from './components'

export const SchemaField = createSchemaField({
  components: {
    FormItem,
    CollapseItem,
    Input,
    ValueInput,
    SizeInput,
    ColorInput,
    ImageInput,
    MonacoInput,
    PositionInput,
    CornerInput,
    BackgroundImageInput,
    BackgroundStyleSetter,
    BoxStyleSetter,
    BorderStyleSetter,
    BorderRadiusStyleSetter,
    DisplayStyleSetter,
    BoxShadowStyleSetter,
    FlexStyleSetter,
    FontStyleSetter,
    DrawerSetter,
    NumberPicker,
    DatePicker,
    TimePicker,
    Select,
    Radio,
    Slider,
    Switch,
    Space,
    ArrayItems,
    ArrayTable,
    FormCollapse,
    FormGrid,
    FormLayout,
    FormTab,
  },
})
