import React from 'react';
import { Button } from '../../../../src/components/atoms/button/Button'
import { FormField } from '../../../../src/components/molecules/form-field/FormField';

const LoginForm: React.FC = () => (
  <div>
    {/* <Typography variant="subtitle" text="Login" /> */}
    <FormField label="Email" inputType="text" />
    <FormField label="Password" inputType="password" />
    <Button text="Sing In" />
  </div>
);

export default LoginForm;
