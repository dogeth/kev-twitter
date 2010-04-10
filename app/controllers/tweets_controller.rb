class TweetsController < ApplicationController
  
  def index
    @tweets = Tweet.all(:order => "created_at desc")
    @tweet = Tweet.new(:user => 'Kev')
  end
  
  def create
    @tweet = Tweet.new(params[:tweet])
    if @tweet.save
      redirect_to tweets_path
    else
      @tweets = Tweet.all(:order => "created_at desc")
      render :action => 'index'
    end
  end
end
