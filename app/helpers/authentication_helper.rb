module AuthenticationHelper
  
  def current_user
    session[:user]
  end
end
