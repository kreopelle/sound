class RemoveUserIdFromSounds < ActiveRecord::Migration[5.2]
  def change
    remove_column :sounds, :user_id, :integer
  end
end
