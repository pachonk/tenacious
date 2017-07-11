class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def method_not_tested
    'This method should have no coverage'
  end
end
