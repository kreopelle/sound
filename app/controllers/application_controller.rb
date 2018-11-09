class ApplicationController < ActionController::API
  include Knock::Authenticable

  # added based on: https://codycallahan.com/blog/authenticate-rails-api-with-knock-jwt
  # don't currently find necessary, may delete later
  # def new_jwt
  #   Knock::AuthToken.new(payload: { sub: current_user.id }).token
  # end
  #
  # def render(options=nil, extra_options={}, &block)
  #   options ||= {}
  #   if json_response?(options) && logged_in?
  #     options[:json].merge!({ jwt: new_jwt })
  #   end
  #   super(options, extra_options, &block)
  # end
  #
  # private
  #
  # def json_response?(options)
  #   options[:json].is_a?(Hash)
  # end
  #
  # def logged_in?
  #   current_user.present?
  # end

end
