export class FormCreator {
  public static CreatePasswordForm(username: string, password: string): FormData{
    const loginFormData = new FormData();
    loginFormData.append('grant_type', 'password');
    loginFormData.append('username', username);
    loginFormData.append('password', password);
    return loginFormData;
  }
  public static CreateRefreshTokenForm(refreshToken: string): FormData{
    const loginFormData = new FormData();
    loginFormData.append('grant_type', 'refresh_token');
    loginFormData.append('refresh_token', refreshToken);
    return loginFormData;
  }
}
