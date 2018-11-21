class Sound < ApplicationRecord
  has_one_attached :file

  validates :title, :description, presence: true, uniqueness: true 
  validates :file, attached: true
  validates :file, content_type: ["audio/mpeg", "audio/mp4", "audio/x-aiff", "audio/ogg"]

end
