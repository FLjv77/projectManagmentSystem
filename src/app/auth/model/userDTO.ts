
export class HoldingUserRegisterDTO{
  constructor(
    userName: string,
    phoneNumber: string,
    password: string
  ) {
    this.password = password;
    this.userName = userName;
    this.phoneNumber = phoneNumber;
  }
  userName: string;
  phoneNumber: string;
  password: string;
}

export class SupervisorUserRegisterDTO {
  constructor(
    userName: string,
    phoneNumber: string,
    password: string
  ) {
    this.password = password;
    this.userName = userName;
    this.phoneNumber = phoneNumber;
  }
  userName: string;
  phoneNumber: string;
  password: string;
}

export class SupervisorSelectedDTO{
  userId: string;
  userName:	string;
  constructor(userId: string,
    userName:	string){
      this.userId=userId;
      this.userName=userName;
    }
  }