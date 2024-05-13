export class User {
[x: string]: any;
    id: number | undefined;
    name: string | undefined;
    surname: string | undefined;
    birthday: string | undefined;
    age: number | undefined;
    phone: string | undefined;
    email: string | undefined;
    loginUserName: string | undefined;
    password: string | undefined;
    repassword: string | undefined;
    profile: string | undefined;
    profession: string | undefined;
    profileDescription: string | undefined;
    symptoms: string[] | undefined;
    token: string | undefined;
  
    constructor(
      name?: string,
      surname?: string,
      birthday?: string,
      age?: number,
      phone?: string,
      email?: string,
      loginUserName?: string,
      password?: string,
      repassword?: string,
      profile?: string,
      profession?: string,
      profileDescription?: string,
      symptoms?: string[],
      token?: string
    ) {
      this.name = name;
      this.surname = surname;
      this.birthday = birthday;
      this.age = age;
      this.phone = phone;
      this.email = email;
      this.loginUserName = loginUserName;
      this.password = password;
      this.repassword = repassword;
      this.profile = profile;
      this.profession = profession;
      this.profileDescription = profileDescription;
      this.symptoms = symptoms;
      this.token = token;
    }
  }
  