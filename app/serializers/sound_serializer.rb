class SoundSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :description
  attribute(:sound_url){ url_for sound.file }

  belongs_to :user
end
