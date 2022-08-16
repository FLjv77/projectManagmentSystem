export interface ApiResult<TData> {
  data: TData;
  isSuccess: boolean;
  statusCode: number;
  message: string;
}

export class AccessToken{
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}
