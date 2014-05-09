class FlipbksController < ApplicationController
  
  def index
    @user = User.find(session[:user_id])
  end
  
  def new
    @user = User.find(session[:user_id])
    @book = Flipbk.new
  end

  def create
    @user = User.find(session[:user_id])
    @book = Flipbk.new(params[:flipbk])
    @book.photos << Photo.where(:id => params[:photos])
    @book.user_id = session[:user_id]
    
    if @book.save
      dir = "#{RAILS_ROOT}/tmp/#{@book.id}/"
      name = "#{@book.user_id}-#{@book.id}-#{@book.name.gsub(/\s+/, "")}"
  
      @book.photos.each do |photo| 
        
        Dir.mkdir(dir) unless File.exists?(dir)
        open("#{dir}image#{photo.order}#{photo.id}.png", 'wb') do |file|
          file << open(photo.url).read
        end
      end
      
      save_to_s3(@book, dir, name)
      
      FileUtils.remove_dir(dir,true)

      redirect_to(flipbk_path(@book.id))
    else
      render "new"
    end
  end
  
  def show
    if session[:user_id]
      @user = User.find(session[:user_id])
    end
    
    @book = Flipbk.find(params[:id])
    
    if @book.public?
      
    else
      if current_user && @book.user.id == current_user.id
      else
      redirect_to(:root)
      end
    end
  end
  
  def edit
    @book = Flipbk.find(params[:id])
  end

  def update
    @book = Flipbk.find(params[:id])
    @book.update_attributes(params[:flipbk])
    @book.user_id = session[:user_id]
    
    if @book.save
      dir = "#{RAILS_ROOT}/tmp/#{@book.id}/"
      name = "#{@book.user_id}-#{@book.id}-#{@book.name.gsub(/\s+/, "")}"
  
      @book.photos.each do |photo| 
        Dir.mkdir(dir) unless File.exists?(dir)
        open("#{dir}image#{photo.order}#{photo.id}.png", 'wb') do |file|
        file << open(photo.url).read
      end
    end
      
      save_to_s3(@book, dir, name)
      
      FileUtils.remove_dir(dir,true)
      
      redirect_to(flipbk_path(@book.id))
    else
      render "edit"
    end
  end

  def destroy
    book = Flipbk.find(params[:id])
    book.photos.each do |p|
      p.flipbk_id = nil
    end
    book.delete
    redirect_to(:users)
  end

  private
  
  def save_to_s3(book, dir, name)
    aws_service = S3::Service.new(
      :access_key_id     => ENV['AWS_ACCESS_KEY_ID'], 
      :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']
    )
    
    speed = @book.speed / 10
    system("convert -delay #{speed} #{dir}*.png #{dir}#{name}.gif")
    
    #sedt dir/flipbook.gif to amazon s3 and then save public url to flipbk
    
    bucket = aws_service.buckets.find("flipbookv3")

    new_object = bucket.objects.build("#{name}.gif")

    new_object.content = open("#{dir}#{name}.gif")

    new_object.save
    
    object = bucket.objects.find("#{name}.gif")
    @book.url = object.url

    @book.save  
  end
  
end
