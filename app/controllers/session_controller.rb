class SessionController < ApplicationController
  
  def logout
    session[:user] = nil
    redirect_to tweets_path
  end
  
  def login
    session[:user] = params[:user] #unless params[:user].blank?
    redirect_to tweets_path
  end
  
end
