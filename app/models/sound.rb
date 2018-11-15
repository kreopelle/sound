class Sound < ApplicationRecord
  validates :title, :description, presence: true
  has_one_attached :file

  belongs_to :user

end
