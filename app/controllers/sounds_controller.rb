require 'pry'
class SoundsController < ApplicationController
  # before_action :authenticate_user
  before_action :set_sound, only: [:show, :update, :destroy]

  # for admin only access
  # if current_user.admin?
    # => add code here to grant admin access
  # end

  def index
    @sounds = Sound.all

    render json: @sounds
  end

  def show
    render json: @sound
  end

  def create
    @sound = Sound.new(sound_params)
    if @sound.save
      render json: @sound, status: :created, location: @sound
    else
      render json: @sound.errors, status: :unprocessable_entity
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
