import React from "react"
import { Button } from "../../atoms/button/Button"
import { Typography } from "../../atoms/typography/Typography"
import { FormField } from "../../molecules/form-field/FormField"
import "./loginForm.scss"

const LoginForm = () => {
  const handleLoginSpotify = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=3208ccd9ce0244a68e4a2f1d2046fd9f&redirect_uri=https://melodyfy.gatsbyjs.io/?&response_type=token&show_dialog=true`
  }

  return (
    <>
      <Typography variant="p">Enter with your email</Typography>

      <form className="o-login-form">
        <FormField label="Email" inputType="text" />
        <FormField label="Password" inputType="password" />
        <Button onClick={handleLoginSpotify}>Sing In</Button>
      </form>

      <Typography variant="p">Or use your Spotify account</Typography>

      <Button onClick={handleLoginSpotify}>Spotify</Button>
    </>
  )
}

export default LoginForm
