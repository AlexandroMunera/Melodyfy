import { Label } from "../../../../src/components/atoms/label/Label"
import { Input } from "../../../../src/components/atoms/input/Input"

import React from "react"

type props = {
  label: string
  inputType: string
}

export const FormField: React.FC<props> = ({ label, inputType }) => (
  <div>
    <Label>{label}</Label>
    <Input type={inputType} />
  </div>
)
