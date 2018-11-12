class AddUserIdToSounds < ActiveRecord::Migration[5.2]
  def change
    add_column :sounds, :user_id, :integer
  end
end
