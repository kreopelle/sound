class Sound < ApplicationRecord
  has_one_attached :file

  validates :title, :description, presence: true
  validate :correct_sound_type

  private

  def correct_sound_type
   if file.attached? && !file.content_type.audio?
     errors.add(:file, 'must be audio file')
   elsif receipt.attached? == false
     errors.add(:file, 'audio file required')
   end
  end

end
