Rails.application.routes.draw do

  scope '/api' do
    resources :sounds, except: [:new, :edit]
    post 'user_token' => 'user_token#create'
  end
end
