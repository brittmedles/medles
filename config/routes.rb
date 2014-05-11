Flipbook::Application.routes.draw do

   resources :users, :flipbks, :logins, :photos
   
   get '/oauth/connect' => 'users#connect', :as => :connect
   get '/oauth/callback' => 'users#callback', :as => :callback
   
   get 'profile/:id' => 'public#profile', :as => :profile
   
   get 'flipbks/delete/:id' => 'flipbks#destroy'
   match 'users/:id' => 'users#show'
  
   get '/us' => 'public#us'
   
   root :to => 'public#index'

end
