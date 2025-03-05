import { createClient } from '@supabase/supabase-js'
import {
  Auth,
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-react'

// Initialisation de Supabase
const supabase = createClient(
  'https://jsplnifvyfrlvxthrteb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzcGxuaWZ2eWZybHZ4dGhydGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNjEzMDcsImV4cCI6MjA1NjczNzMwN30.osJTYe_o8xnNsHDI5ljXOYeg56XkCihF0hzW7_4olvU'
)

const Login = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{
      theme: ThemeSupa, // Utilise le thème Supa de base
      variables: {
        // Personnalisation des couleurs
        default: {
          colors: {
            brand: '#4CAF50', // Couleur verte pour le logo ou certains boutons
            brandAccent: '#ff5722', // Accent orange
            buttonText: '#fff', // Texte des boutons en blanc
            inputText: '#333', // Texte des champs de formulaire en noir
            inputBackground: '#fff', // Fond des champs de texte en blanc
            inputBorder: '#ccc', // Bordure des champs en gris clair
            inputBorderFocus: '#4CAF50', // Bordure des champs quand ils sont focus
            success: '#4CAF50', // Vert pour les messages de succès
            danger: '#f44336', // Rouge pour les messages d'erreur
          },
        },
      },
    }}
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
)

export default Login;
