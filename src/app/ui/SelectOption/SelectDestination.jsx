import Select from 'react-select';

export default function SelectDestination({ data, placeholder }) {
  return (
    <Select
      options={data}
      placeholder={placeholder}
      classNames={{
        control: state => (state.isFocused ? 'cs_hover_option' : ''),
      }}
    />
  );
}
