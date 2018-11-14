class SoundSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :description, :sound_url

  def sound_url
    return rails_blob_url(object.file)
  end

end
