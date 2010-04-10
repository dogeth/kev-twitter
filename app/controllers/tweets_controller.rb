class TweetsController < ApplicationController
  include AuthenticationHelper 
  
  def index
    @tweets = Tweet.all(:order => "created_at desc")
    @tweet = Tweet.new
  end
  
  def create
    @tweet = Tweet.new(params[:tweet])
    @tweet.user = current_user || 'unknown'
    if @tweet.save
      flash[:notice] = "Thanks for tweeting"
      redirect_to tweets_path
    else
      flash.now[:error] = "Thanks for trying!"
      @tweets = Tweet.all(:order => "created_at desc")
      render :action => 'index'
    end
  end

end
