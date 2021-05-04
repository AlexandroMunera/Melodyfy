import React from "react"
import { Button } from "../../../../src/components/atoms/button/Button"
import { FormField } from "../../../../src/components/molecules/form-field/FormField"
import "./loginForm.scss"

const LoginForm: React.FC = () => (
  <div className="o-login-form">
    <FormField label="Email" inputType="text" />
    <FormField label="Password" inputType="password" />
    <Button text="Sing In" />
  </div>
)

export default LoginForm
