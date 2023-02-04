import React from 'react'

function SelectInput({label,options,name,onChange,state}) {
  return (
    <div className="lg:col-span-2">
        <Select label={label} color="blue-gray">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
        </Select>
    </div>
  )
}

export default SelectInput