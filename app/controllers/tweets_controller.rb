class TweetsController < ApplicationController
  
  def index
    @tweets = Tweet.all(:order => "created_at desc")
    
  end
  
  def create
    Tweet.create(params[:tweet])
    redirect_to tweets_path
  end
end
