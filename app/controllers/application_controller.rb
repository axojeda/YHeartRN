class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    def authenticate
      app_secret_key = "ilove$oup"
      token = request.headers['Authorization']
      if token.blank?
        return render json: { error: 'Authorization header missing' }, status: :unauthorized
      end
    
      begin
        decoded_token = JWT.decode(token, app_secret_key, true, { algorithm: 'HS256' })
        user = User.find(decoded_token[0]['user_id'])
        if user
          @current_user = user
        else
          return render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      rescue JWT::DecodeError
        return render json: { error: 'Invalid token' }, status: :unauthorized
      end
    end
end