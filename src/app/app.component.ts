import { Component } from '@angular/core';
import { AuthService,FacebookLoginProvider,GoogleLoginProvider,} from 'angular-6-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SocialMediaAuthentication';
  assginuseerdetails
  userimage
  username
  constructor(
       private socialservice:AuthService
  )
  {

  }

  socialsigin(platform:string)
  {
    
   
    let socialPlatformProvider;

    if(platform=="facebook"){
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    else if(platform=="gmail")
{
    socialPlatformProvider=GoogleLoginProvider.PROVIDER_ID;
}

this.socialservice.signIn(socialPlatformProvider).then((userdata)=>
    {

        this.assginuseerdetails=userdata

        this.userimage=this.assginuseerdetails.image
        this.username=this.assginuseerdetails.email
       

});
  }
}
