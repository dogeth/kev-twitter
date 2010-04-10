class Tweet < ActiveRecord::Base
  validates_presence_of :user, :message
end
