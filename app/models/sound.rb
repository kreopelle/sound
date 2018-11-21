class Sound < ApplicationRecord
  has_one_attached :file

  validates :title, :description, presence: true

end
