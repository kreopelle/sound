Rails.application.routes.draw do
  scope '/api' do
    resources :sounds, except: [:new, :edit]
  end
end
