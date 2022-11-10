import { CheckBox, CheckBoxGroup } from 'components/CheckBox'

export const App = () => {
  const onCheck = (value) => console.log(value)

  return (
    <CheckBoxGroup legend='Grupo de prueba' onChecked={onCheck}>
      <CheckBox type='checkbox' label='Opción 1' state='normal' />
      <CheckBox type='checkbox' label='Opción 2' state='normal' />
      <CheckBox type='checkbox' label='Opción 3' state='normal' />
    </CheckBoxGroup>
  )
}
