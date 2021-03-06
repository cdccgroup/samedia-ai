import React from "react";

export function Input({ register, name, ...rest }) {
  return <input {...register(name)} {...rest} />;S
}

export function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
      {options.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export function TextArea({ register, name, ...rest }) {
  return <textarea {...register(name)} {...rest} />;
}


