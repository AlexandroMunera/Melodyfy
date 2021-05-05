import React from "react"
import { Button } from "../../atoms/button/Button"
import { FormField } from "../../molecules/form-field/FormField"
import "./loginForm.scss"

const LoginForm = () => {
  const handleLoginSpotify = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=3208ccd9ce0244a68e4a2f1d2046fd9f&redirect_uri=http://localhost:8000/?&response_type=token&show_dialog=true`
  }

  return (
    <>
    <p>Enter with your email</p>
    <form className="o-login-form">
      <FormField label="Email" inputType="text" />
      <FormField label="Password" inputType="password" />
      <Button text="Sing In" onClick={handleLoginSpotify} />
    </form>
    <p>Or use your Spotify account</p>
    <Button text="Spotify" onClick={handleLoginSpotify} />

    </>
  )
}

export default LoginForm
