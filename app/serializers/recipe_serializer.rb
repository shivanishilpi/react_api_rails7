class RecipeSerializer
  include JSONAPI::Serializer
  attributes :name, :ingredients, :instruction, :image, :image_url, :created_at, :updated_at
end
