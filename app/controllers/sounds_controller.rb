class SoundsController < ApplicationController
  before_action :set_sound, only: [:show, :update, :destroy]

  def index
    @sounds = Sound.all
    render json: @sounds
  end

  def show
    render json: @sound
  end

  def create
    sound = Sound.new(sound_params)
    if sound.save
      render json: sound, status: :created, location: sound
    else
      render json: ErrorSerializer.serialize(sound.errors)
    end
  end

  def update
    if @sound.update(sound_params)
      render json: @sound
    else
      render json: @sound.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @sound.destroy
  end

  private
      def set_sound
      @sound = Sound.find(params[:id])
    end

    def sound_params
      params.require(:sound).permit(:title, :description, :file)
    end
end
