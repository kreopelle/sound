require 'pry'

class SoundSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :description, :sound_url

  def sound_url
    variant = object.file.variant(resize: "100x100")
    return rails_representation_url(variant, only_path: true)
  end

  belongs_to :user
end
