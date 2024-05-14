import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  type: string;
  error?: string;
}

const InputField = React.forwardRef<
  HTMLInputElement,
  { label: string; type: string; error?: string } & ReturnType<UseFormRegister<FieldValues>>
>((props: InputProps, ref) => {
  return (
    <div className="sm:col-span-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2">
        <input
          ref={ref}
          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...props}
          type={props.type}
        />

        {props.error && <p className="text-xs mt-1 text-red-500">{props.error}</p>}
      </div>
    </div>
  );
});

export default InputField;
