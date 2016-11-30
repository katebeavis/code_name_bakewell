Rails.application.routes.draw do
  devise_for :users, :controllers => { omniauth_callbacks: "callbacks", registrations: 'users/registrations' }
  root 'recipes#index'

  resources :recipes do
    resources :notes
  end
  
end
