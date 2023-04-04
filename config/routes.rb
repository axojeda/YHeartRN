Rails.application.routes.draw do
  resources :messages
  resources :chatrooms
  resources :reviews, only: [:index, :create, :destroy]
  resources :posts
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/users', to: 'users#index'
  get '/me', to: 'users#me'
  get '/users/:id', to: 'users#show'
  post "/signup", to: "users#create"
end

