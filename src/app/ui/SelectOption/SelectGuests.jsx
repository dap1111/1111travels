import Select from 'react-select';

export default function SelectGuests({ data, placeholder }) {
  return <Select options={data} placeholder={placeholder} />;
}
