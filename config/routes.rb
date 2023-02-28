Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      post 'recipes/create'
      patch 'recipes/:id', to: 'recipes#update'
      get '/show/:id', to: 'recipes#show'
      delete '/destroy/:id', to: 'recipes#destroy'
    end

    namespace :v2 do
      get 'books/index'
      post 'books/create'
      get '/show/:id', to: 'books#show'
      delete '/destroy/:id', to: 'books#destroy'
      get 'latest', to: 'books#latest'
    end
  end

  # get '/* path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
