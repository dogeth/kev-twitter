# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_kev-twitter_session',
  :secret      => '9b7d0cea195f7fadb1d5bd8e0a68ee183fec3af4c9e6fe0174042b0443b78d8f9d11e58239e570a4f6cbc9e84310cd8a99f9b1eea35a2ef70ec388928f120dab'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
