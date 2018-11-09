Rails.application.routes.draw do
  resources :users

  scope '/api' do
    resources :sounds, except: [:new, :edit]
  end
end
