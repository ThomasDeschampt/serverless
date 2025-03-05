import {createClient} from '@supabase/supabase-js'
import {
  Auth,
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-react'

const supabase = createClient(
  'https://jsplnifvyfrlvxthrteb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzcGxuaWZ2eWZybHZ4dGhydGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNjEzMDcsImV4cCI6MjA1NjczNzMwN30.osJTYe_o8xnNsHDI5ljXOYeg56XkCihF0hzW7_4olvU'
)

const Login = () => <Auth
  supabaseClient={supabase}
  appearance={{theme: ThemeSupa}}
  localization={{
    variables: {
      sign_in: {
        email_label: 'Ton adresse email',
        password_label: 'Ton mot de passe',
      },
    },
  }}
  magicLink={true}
/>

export default Login;
