class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :topic, null: false

      t.timestamps null: false
    end
  end
end
