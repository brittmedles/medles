class PublicController < ApplicationController

  def index
    @users = User.all
    @user = User.new
    @public_flipbks = []
    
    Flipbk.all.each do |f|
      if f.public
        @public_flipbks << f
      end
    end
    
    @placeholder = (24 - @public_flipbks.length)
  end
  
  

  def create
    @user = User.new(params[:user])

    if @user.save
      session[:user_id] = @user.id
      redirect_to(:user)
    else
      render "new"
    end
  end

  def profile
    if session[:user_id] 
      @user = User.find(params[:id])
    else
      redirect_to :root
    end
  end
  
end
